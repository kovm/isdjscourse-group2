let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(`This is a total ${total/ 12}`);
console.log(typeof null);
console.log(1 === 1);
console.log('10' + '1');

function d(f,s){
    return f + s(2);
}

function s(n){
    return 2+n;
}

function f1() {
  console.log(typeof this);
  this.name = "some name 2";
  return this.name;
}

f1inst = new f1();

console.log(d(5,s));
f1.name = "some name";
console.log(typeof d);
console.log(f1());
console.log(f1inst.name);