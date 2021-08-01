/*Import express*/
import express, { request, response } from 'express';
/*Import modulo propio*/
import {Producto} from './modelo.js';

/*Declaración puerto y app*/
const puerto = 8080;

const app = express();

/*Inicio App*/
const server = app.listen(puerto, () =>
console.log('Server up en puerto ', puerto)
);

/*Manejo de errores*/
server.on('error', (err) => {
    console.log('ERROR => ', err);
});

/*Declaración de producto para manejo del array de producto en memoria y creación de instancia 
  de la clase Producto importada del módulo*/
let productos = [];
let prod = new Producto();

/*Listado general de productos*/
app.get('/api/productos/listar', (req, res) => {

    productos = prod.listar(productos);
    
    if(productos.length===0){
        res.json({
           error: 'No hay productos cargados', 
        });
    }else{
        res.json({
            productos,
        });
    }
});

/*Listado general de productos por ID*/
app.get('/api/productos/listar/:id', (req, res) => {
    //const prod = new Producto();
    const itemId = prod.listarItem(productos, req.params.id);

    if (JSON.stringify(itemId)=='{}'){
        res.json({
            error: 'Producto no encontrado', 
        });
    }else{
        res.json({
            itemId,
        });
    }
});

/*Inserción de nuevo objeto en array productos*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/api/productos/guardar/', (req, res) => {
    
    const body = req.body;
    
    if(
        !body.title ||
        !body.thumbnail ||
        !body.price ||
        typeof body.title != 'string' ||
        typeof body.thumbnail != 'string' ||
        typeof body.price != 'number'
        ){
            return res.status(400).json({
                msg: 'Se necesitan los datos title, thumbnail y price',
            });
        }
    
    const prod = new Producto(body.title, body.price, body.thumbnail, productos.length);
    //prod.(body.title, body.price, body.thumbnail, productos.length);
    productos = prod.guardar(productos);

    res.status =201;
    res.json({
        data: productos[productos.length-1],
    })
});