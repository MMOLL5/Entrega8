export class Producto{
    
    constructor(title, price, thumbnail, id){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
    }

    /*Listado de Productos. Recibe un array y lo devuelve, capaz no tenga mucho sentido este método 
      pero la clase tiene la responsabilidad de devolver los datos*/
    listar(array){  
        
        console.log('Responsabilidad de listar');  
    return array;
    }

    /*Listado de Productos por ID. Recibe un array y un ID de producto, se recorre el array y se devuelve 
      el elemento que coincide con el ID o un objeto vacío*/
    listarItem(array, id){    
        
        let item = {};
        array.forEach(element => {
            if(element.id == id){
                item = element;
            }
        });
        console.log('Responsabilidad de listarItem');
        return item;
    }

    /*Agregado de objeto en el array. Recibe un array y toma los valores del constructor e incrementa el id
      de acuerdo a la longitud total del array al finalizar retorna el array completo*/
    guardar(array){
        
        let nuevoProducto = {        
            title : this.title,
            price : this.price,
            thumbnail : this.thumbnail,
            id : array.length + 1,
        };
    
        array.push(nuevoProducto);
        console.log('Responsabilidad de guardar');
        return array;
    }
}    