(function(){
	var arr = [1, 2, 3, 4, 5];

	arr.unshift(0);
	arr.push(6);
	console.log(arr);

	arr.shift();
	arr.pop();
	console.log(arr);

	console.log('-------- FOREACH --------');

	arr.forEach(function(element){
		console.log(element);
	});

	console.log('-------- SOME --------');

	var hasFive = arr.some(function(el){
		return el === 5;
	});
	console.log(hasFive);

	console.log('-------- EVERY --------');

	var everyFive = arr.every(function(el){
		return el === 5;
	});
	console.log(everyFive);

	console.log('-------- MAP --------');

	var mappedArray = arr.map(function(el) {
		return {
			elemento: el
		};
	});
	console.log(mappedArray);

})();