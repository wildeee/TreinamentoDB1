(function(){
	
	defaultVal(5);         // Não aplica default
	defaultVal(null);      // Aplica default
	defaultVal(undefined); // Aplica default
	defaultVal(true);      // Não aplica default
	defaultVal(false);     // Aplica default


	function defaultVal(val) {
		val = val || 'VALOR DEFAULT';
		console.log(val);
	}

})();