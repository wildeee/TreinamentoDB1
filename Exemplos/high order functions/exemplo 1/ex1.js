(function(){

	// Primeira chamada
	principal(secundario);

	// Segunda chamada
	principal(function(paramStr){
		console.log('Entrando na funcao anonima');
		console.log('parametro: "' + paramStr + '"');
	});

	function principal(callback){
		console.log('Entrando no metodo principal!');
		callback('String parametro');
	}

	function secundario(paramStr) {
		console.log('Entrando no metodo secundario');
		console.log('O valor do parametro eh "' + paramStr + '"');
	}

})();