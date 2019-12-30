var chi = 0;
while (chi<=100) {
	if ((!(chi%3)) && (!(chi%5))) console.log("FizzBuff");
	else if (!(chi%3)) console.log("Fizz");
	else if (!(chi%5)) console.log("Buff);
	else console.log(chi);
chi++;
}