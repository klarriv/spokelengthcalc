var j = 0;
var f1 = 0;
var f2 = 0;
var t1 = 0;
var t2 = 0;
var a1 = 0;
var a2 = 0;
var n = 0;
var c1 = 0;
var c2 = 0;
var e = 0;

function getVariables(){
  var theForm = document.forms["spokelengthform"];

  j = theForm.elements["j"].value;
  f1 = theForm.elements["f1"].value;
  t1 = theForm.elements["t1"].value;
  a1 = theForm.elements["a1"].value;
  n = theForm.elements["n"].value;
  c1 = theForm.elements["c1"].value;
}

function isRequiredFilled(){
  var theForm = document.forms["spokelengthform"];

  if(theForm.elements["j"].value != null && theForm.elements["f1"].value != null && theForm.elements["t1"].value != null && theForm.elements["a1"].value != null && theForm.elements["n"].value != null && theForm.elements["c1"].value != null){
    return true;
  }
  else {
    return false;
  }
}

function calculateResult(){
  if ( isRequiredFilled() ){
    getVariables();
    document.getElementById("result1").innerHTML = n;

  }
}

function hideResult(){
  var divobj = document.getElementById('result1');
  divobj.style.display='none';
}
