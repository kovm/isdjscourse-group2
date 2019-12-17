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
}