var controllercalculadora = require('./calculadoracontroller.js');

//Libreria donde se encuentra las funciones disponible con los url A...//
 
module.exports= function(app){
	app.post('/Asumar', controllercalculadora.Sumar); //Llama el url de A sumar hacia la funcion de sumar//
	app.post('/Arestar', controllercalculadora.Restar); //Llama el url de A restar hacia la funcion de restar//
	app.post('/Amultiplicar', controllercalculadora.Multi); //Llama el url de A multiplicar hacia la funcion de multiplicar//
	app.post('/Adividir', controllercalculadora.Div); //Llama el url de A dividir hacia la funcion de dividir//
}