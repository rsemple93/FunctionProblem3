/* Counting the number of occurences of a
specified letter in a string.*/

function numberOfOccurence(string, letter) {
	let count = 0;

	for (i = 0; i < string.length; i++) {
		if (string[i] == letter) {count++}
	}
	return 'This is the count: ' + count;
}

console.log(numberOfOccurence('The solution to this function problem', 'o'));