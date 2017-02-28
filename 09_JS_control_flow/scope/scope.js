function changeString(str) {
	var newStr = '';
	for(var i = 0; i < str.length; i++) {
		if(str[i] === ' ') {
			newStr += "_";
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}
var positions = [];

var names = ['peter', 'paul', 'mary', 'paul', 'apu'];
for(var i = 0; i < names.length; i++) {
	if(names[i] === 'paul') {
		positions.push(names.indexOf());
	}
}

var nums = [1,3,4,'a', 'b', 5,4,'c',4];
var truNums =[];
for(var i = 0; i < nums.length; i++) {
	if (typeof nums[i] === 'number') {
		truNums += Number(nums[i]);
	}
}