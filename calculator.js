
/*function getTarget(e) {
  return e.target;
}

function itemDone(e) {
  var target
  target = getTarget(e);
  //elParent = target.parentNode;
  //elGrandparent = target.parentNode.parentNode;
  target.remove(target);

  if (e.preventDefault) {
    e.preventDefault();
  }
}

/*var el = document.getElementById("calcInterface");
el.addEventListener('click', function(e) {
  itemDone(e);
}, false);


function display() {
  return 2 * 3
}

document.getElementById("calcDisplay").innerHTML = display();

var el2 = document.getElementById("calcInterface");
el.addEventListener('click', function(e) {
  display(e);
}, false);*/


/*$("button").click(function(){
    $("p").append("1 ");
});*/

var expression = "  "
var answer = eval(expression)
var keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, " + ", " - ", " * ", " / "]
/*$("button").click(function() {
    var id = $(this).attr('id');
  //  var string = $("p");
    //var answer = $.parseHTML(string);
    //console.log(answer)
    if (id === "=") {
      $("p").html(answer)
  } else {
    $("p").append(id);
  }
});*/

$("button").click(function() {
    var id = $(this).attr('id');
    if (id !== "clear" && id !== "=") {
    $("p").append(id);
  } else if (id === "clear") {
  $("p").html("   ")
  }});

console.log(eval("2+2"));


$("button").click(function() {
    var id = $(this).attr('id');

    if (id === "1")      {
    expression += "1"
  } else if (id === "2") {
    expression += "2"
  } else if (id === "3") {
    expression += "3"
  } else if (id === "4") {
    expression += "4"
  } else if (id === "5") {
    expression += "5"
  } else if (id === "6") {
    expression += "6"
  } else if (id === "7") {
    expression += "7"
  } else if (id === "8") {
    expression += "8"
  } else if (id === "9") {
    expression += "9"
  } else if (id === "0") {
    expression += "0"
  } else if (id === " + ") {
    expression += " + "
  } else if (id === " - ") {
    expression += " - "
  } else if (id === " * ") {
    expression += " * "
  } else if (id === " / ") {
    expression += " / "
  } else if (id === "(") {
    expression += "("
  } else if (id === ")") {
    expression += ")"
  } else if (id === "** 2 ") {
    expression += "** 2 "
  } else if (id === "** .5 ") {
    expression += "** .5 "
  } else if (id === ".") {
    expression += "."
  } else if (id === "=") {
    var answer = eval(expression);
    $("p").html(answer);
    console.log(answer);
    expression = answer
  } else if (id === "clear") {
    expression = "  "
  }

  var answer = eval(expression);
  console.log(expression);
  console.log(answer);

});

console.log(expression)


var add = function(number1, number2) {
  return number1 + number2;
}

var subtract = function(number1, number2) {
  return number1 - number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}
