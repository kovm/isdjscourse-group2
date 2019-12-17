let arr = new Array();

for (let i = 0; i < 10; i++)
{
  arr[i] = i * 10;
}

for (let i = 0; i < 10; i++)
{
  if (arr[i] < 100) {
    document.write("< 100: " + arr[i]);
  } else {
    document.write(">= 100: " + arr[i]);
  }
}
