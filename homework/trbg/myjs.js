function range(a,b,h = (a<b)?1:-1)
{
	var array=[];
	if (h>0) {
		for (var i = a; i <= b; i+=h) 
		{
			array.push(i);
		}
	}
	else
	{
		for (var i = a; i >= b; i+=h) 
		{
			array.push(i);
		}
	}
	return array;
}
function sum(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i];
	}
 return sum;	
}
console.log(range(10,1));
console.log(sum(range(10,1)));