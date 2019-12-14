/* Second homework */

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
        continue;
    } 
    if (i % 5 == 0) {
        console.log("Buzz");
        continue;
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        continue;
    }
    console.log(i);
}

//*
function CheckPolyndrom(val) {
    if (typeof(val) == "string") {
        val = val.toLowerCase();
    }
    var boolFlag = false;
    for (var i = 0; i < val.length; i++) {
        if (val[i] != val[val.length - i - 1]) {
            boolFlag = true;
            break;
        }
    }
    return boolFlag ? "This is not polyndrom" : "This is polyndrom";
}

var masPol = [1,2,3,3,2,1];
var masNoPol = [1,5,7,2,1];
var stringPol = "asdfghhgfdsa";
var stringPolApperCase = "eRtyuIiuyTre";
var stringNoPol = "qazxswedcvfrtgbnhy";

console.log(CheckPolyndrom(masPol));
console.log(CheckPolyndrom(masNoPol));
console.log(CheckPolyndrom(stringPol));
console.log(CheckPolyndrom(stringPolApperCase));
console.log(CheckPolyndrom(stringNoPol));

/* First homework
var masDiv = [];

function NewDiv(number, Object) {
    var div = document.createElement('div');
    div.setAttribute('id', 'result' + number);
    div.setAttribute('data-name', Object.GetName());
    div.setAttribute('data-branch', Object.GetBranch());
    div.className = "results";

    div.innerHTML = "<div><p style=\"font-size: 14px;line-height: 1;\">" + Object.GetName() + "</p> <br><p style=\"font-size: 11px;line-height: 0;\">" + Object.GetBranch() + "</p> <br><p style=\"font-size: 11px;line-height: 0;\">---------------------------</p>";
    var element = document.getElementById("searchform");
    element.appendChild(div);

    masDiv.push(div);   
}

function DeleteDiv() {
    var length = masDiv.length;

    if (length != 0) {
        var element = document.getElementById("searchform");
        for (var i = 0; i < length; i++) {
            element.removeChild(masDiv[i]);
        }
        masDiv = [];
    }
}*/