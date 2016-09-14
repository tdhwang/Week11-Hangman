// var let = process.argv[2];
// console.log(let);

function Letters (let) {

	this.character = let;
	this.appear = false;
	this.letterAppear = function (letters) {
		console.log('Letters are ' + character);
		if (this.character === false) {
			//console.log('_');
			return '_';
		}
		else {
			return character;
		}

	}

}