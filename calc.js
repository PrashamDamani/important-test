var numKeys = [];
var opns = [];
var res = document.querySelector("#resultArea");
var clrBtn = document.querySelector("#clrTxt");
var delBtn = document.querySelector("#del");
var eqBtn = document.querySelector("#eq");
var decPoint = document.querySelector("#decp");
var opac = document.querySelector("#opac");
var opnSyms = ["+", "-", "*", "/"];

for (var i = 0; i <= 9; i++) {
    (function (i) {
        var qs = "#num" + i;
        numKeys.push(document.querySelector(qs));
        numKeys[i].addEventListener("click", function () {
            res.textContent += i;
            updatePreview();
        });
    })(i);
}

for (var i = 0; i < opnSyms.length; i++) {
    (function (i) {
        var qs = "#op" + i;
        opns.push(document.querySelector(qs));
        opns[i].addEventListener("click", function () {
            if (res.textContent && !isOperator(res.textContent.slice(-1))) {
                res.textContent += opnSyms[i];
            }
        });
    })(i);
}

clrBtn.addEventListener("click", function () {
    res.textContent = "";
    opac.innerHTML = "";
});

delBtn.addEventListener("click", function () {
    res.textContent = res.textContent.slice(0, -1);
    updatePreview();
});

decPoint.addEventListener("click", function () {
    let current = res.textContent.split(/[\+\-\*\/]/).pop();
    if (!current.includes(".")) {
        res.textContent += ".";
    }
});

eqBtn.addEventListener("click", function () {
    try {
        let result = eval(res.textContent);
        if (result !== undefined) {
            res.textContent = result;
            opac.innerHTML = "";
        }
    } catch (e) {
        res.textContent = "Invalid Syntax";
    }
});

function isOperator(char) {
    return opnSyms.includes(char);
}

function updatePreview() {
    try {
        if (res.textContent && !isOperator(res.textContent.slice(-1))) {
            opac.innerHTML = eval(res.textContent);
        } else {
            opac.innerHTML = "";
        }
    } catch (e) {
        opac.innerHTML = "";
    }
}
