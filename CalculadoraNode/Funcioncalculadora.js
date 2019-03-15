<script type="text/javascript">
   	
 
 let numero1=0;
 let numero2=0;
 let tipodesigno='';


 function num(numero){
 	document.getElementById("blanco").value=document.getElementById("blanco").value + numero;
 }
function suma(){
	numero1=parseInt(document.getElementById("blanco").value);
	tipodesigno= '+';
	document.getElementById("blanco").value="";
}
function resta(){
	numero1=parseInt(document.getElementById("blanco").value);
	tipodesigno= '-';
	document.getElementById("blanco").value="";
}
function multi(){
	numero1=parseInt(document.getElementById("blanco").value);
	tipodesigno= '*';
	document.getElementById("blanco").value="";
}
function divi(){
	numero1=parseInt(document.getElementById("blanco").value);
	tipodesigno= '/';
	document.getElementById("blanco").value="";
}
function borrar(){
	document.getElementById("blanco").value="0";
}
function igual(){
	numero2=parseInt(document.getElementById("blanco").value);
	let claseoperacioninstaciada=new operacion(numero1,numero2);

	switch(tipodesigno){
		case '+':
	claseoperacioninstaciada.sumar().then(function(response)
		{
			document.getElementById("blanco").value=response;
		},function(error)
		{
			document.getElementById("blanco").value="Hice algo mal :C";

		});
		break;
		case '-':
		claseoperacioninstaciada.restar().then(function(response)
		{
			document.getElementById("blanco").value=response;
		},function(error)
		{
			document.getElementById("blanco").value="Hice algo mal :C";

		});
		break;
	
		case '*':
		claseoperacioninstaciada.multiplicar().then(function(response)
		{
			document.getElementById("blanco").value=response;
		},function(error)
		{
			document.getElementById("blanco").value="Hice algo mal :C";

		});
		break;
		case '/':
		claseoperacioninstaciada.dividir().then(function(response)
		{
			document.getElementById("blanco").value=response;
		},function(error)
		{
			document.getElementById("blanco").value="Hice algo mal :C";

		});
		break;
	}

}


   </script>