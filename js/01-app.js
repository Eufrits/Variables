// Inicializar una variable con un valor
var producto = "monitor de 24 pulgadas";
console.log(producto);

// Las variables se pueden reasignar
producto = "monitor 19 pulgadas";
console.log(producto);

// JavaScript es un lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20
console.log(producto);

// Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;

disponible = false;

//inicializar multiples variables
var categorias = 'Computadoras',
    marca = "Marca famosa",
    calificacion = 5;

//Las variables no deben iniciar con numeros. Ejemplo:    
//var 99dias ;
//Pero si se puede:
var dias99;
var _01;
var __01;
var _usuario;
var __usuario; 

/*Existen diferentes estilos para nombrar una variable con diferentes palabras, por ejemplo Kamelcase:
(la forma mas tradicional de hacerlo)
var nombreProductoCategoriaPrecio; 

//No se recomienda que quede de esta forma:
var nombreproducto; 

//underscore, snake o serpiente:
var nombre_producto;
var nombre_producto_categoria_precio;

//Pascalcase:
var Producto
//Ó
var NombreProducto;*/