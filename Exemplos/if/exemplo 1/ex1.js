(function(){
	

	if (5){
		console.log('True no 5');
	}

	if ("asdf"){
		console.log('True no asdf');
	}

	if (true){
		console.log('True no true');
	}

	if (null){
		console.log('Nunca vai entrar aqui');
	}

	if (undefined){
		console.log('nem aqui');
	}

	if (false){
		console.log('aqui muito menos');
	}

	if (''){
		console.log('Strigs vazias são false também');
	}

	if ([] && {}){
		console.log('Cuidado! Arrays e objetos vazios sao True');
	}

})();