function isPalindrom(str){
	let arr = str.toLowerCase().split('');
    let reverseArr = [];

    for (let i = 0; i < arr.length; i++){
      reverseArr.unshift(arr[i]);
    }

    return arr.join('') === reverseArr.join('');
}

console.log(isPalindrom('345543'));