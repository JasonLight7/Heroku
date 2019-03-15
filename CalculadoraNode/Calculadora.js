class _Operacion {
	constructor(_numero1,_numero2){
		this.numero1=_numero1;
   	 	this.numero2=_numero2;

	}
   Sumarajax()
   {
   	  var objetoaenviar=this;
   	  //Return a new promise.
   	  return new Promise(function(resolve, reject){
   	  	// Do the usual XHR stuff

   	  	try{
   	  		 var xhr = new XMLHttpRequest();
   	  		xhr.open('POST', 'http://localhost:8080/Asumar'); 
   	  		xhr.setRequestHeader('Content-Type', 'application/json'); 
   	  		xhr.onload = function() {
   	  			if (xhr.status === 200){
   	  				resolve(JSON.parse(xhr.responseText));
   	  			}
   	  			else
   	  			{
   	  				reject(xhr);
   	  			}
   	  		};
   	  		xhr.send(JSON.stringfly(objetoaenviar));


   	  	}
   	  	catch(err){
   	  		reject(err.message);
   	  	}
   	  });
   
   }
    Restarajax()
   {
   	  var objetoaenviar=this;
   	  //Return a new promise.
   	  return new Promise(function(resolve, reject){
   	  	// Do the usual XHR stuff

   	  	try{
   	  		 var xhr = new XMLHttpRequest();
   	  		xhr.open('POST', 'http://localhost:8080/Arestar'); 
   	  		xhr.setRequestHeader('Content-Type', 'application/json'); 
   	  		xhr.onload = function() {
   	  			if (xhr.status === 200){
   	  				resolve(JSON.parse(xhr.responseText));
   	  			}
   	  			else
   	  			{
   	  				reject(xhr);
   	  			}
   	  		};
   	  		xhr.send(JSON.stringfly(objetoaenviar));


   	  	}
   	  	catch(err){
   	  		reject(err.message);
   	  	}
   	  });
   
   }
    Multiajax()
   {
   	  var objetoaenviar=this;
   	  //Return a new promise.
   	  return new Promise(function(resolve, reject){
   	  	// Do the usual XHR stuff

   	  	try{
   	  		 var xhr = new XMLHttpRequest();
   	  		xhr.open('POST', 'http://localhost:8080/Amultiplicar'); 
   	  		xhr.setRequestHeader('Content-Type', 'application/json'); 
   	  		xhr.onload = function() {
   	  			if (xhr.status === 200){
   	  				resolve(JSON.parse(xhr.responseText));
   	  			}
   	  			else
   	  			{
   	  				reject(xhr);
   	  			}
   	  		};
   	  		xhr.send(JSON.stringfly(objetoaenviar));


   	  	}
   	  	catch(err){
   	  		reject(err.message);
   	  	}
   	  });
   
   }
     Diviajax()
   {
   	  var objetoaenviar=this;
   	  //Return a new promise.
   	  return new Promise(function(resolve, reject){
   	  	// Do the usual XHR stuff

   	  	try{
   	  		 var xhr = new XMLHttpRequest();
   	  		xhr.open('POST', 'http://localhost:8080/Adividir'); 
   	  		xhr.setRequestHeader('Content-Type', 'application/json'); 
   	  		xhr.onload = function() {
   	  			if (xhr.status === 200){
   	  				resolve(JSON.parse(xhr.responseText));
   	  			}
   	  			else
   	  			{
   	  				reject(xhr);
   	  			}
   	  		};
   	  		xhr.send(JSON.stringfly(objetoaenviar));


   	  	}
   	  	catch(err){
   	  		reject(err.message);
   	  	}
   	  });
   
   }
   }