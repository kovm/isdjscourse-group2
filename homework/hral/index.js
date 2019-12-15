function watch(message) {
    return message;
}
watch('simple word');

console.log(watch('simple word'));

let color = getColor;
color();

function getColor(color = 'red') {
    if (color == 'red') {
        return;
    }
    console.log(color);
}
klbhjb

// color('yellow');