/*******WARMUP EXERCISE (courtesy of theOdinProject)*******/
var newArray = [];

// function that takes array and returns max number
function my_max(numArray){
	return Math.max.apply(null,numArray);
}
// function that takes a string and returns the number of vowels
function vowel_count(str){
   var m = str.match(/[aeiouy]/gi);
	 return m === null ? 0 : m.length;
};

// function that reverses a string and reverses it
function reverse(str){
	var reverse_str = str.split('').reverse('').join('');
  return reverse_str;
}
