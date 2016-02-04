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

var leftResults = [];
var rightResults = [];

function getVariablesLeft(){
  var theForm = document.forms["spokelengthform"];

  j = parseFloat(theForm.elements["j"].value);
  f1 = parseFloat(theForm.elements["f1"].value);
  t1 = parseFloat(theForm.elements["t1"].value);
  a1 = parseFloat(theForm.elements["a1"].value);
  n = parseFloat(theForm.elements["n"].value);
  c1 = parseFloat(theForm.elements["c1"].value);
}

function getVariablesRight(){
  var theForm = document.forms["spokelengthform"];

  f2 = parseFloat(theForm.elements["f2"].value);
  t2 = parseFloat(theForm.elements["t2"].value);
  a2 = parseFloat(theForm.elements["a2"].value);
  c2 = parseFloat(theForm.elements["c2"].value);
}

function isRequiredFilledLeft(){
  var theForm = document.forms["spokelengthform"];

  if(theForm.elements["j"].value != "" && theForm.elements["f1"].value != "" && theForm.elements["t1"].value != "" && theForm.elements["a1"].value != "" && theForm.elements["n"].value != "" && theForm.elements["c1"].value != ""){
    return true;
  }
  else {
    return false;
  }
}

function isRequiredFilledRight(){
  var theForm = document.forms["spokelengthform"];

  if(theForm.elements["j"].value != "" && theForm.elements["f2"].value != "" && theForm.elements["t2"].value != "" && theForm.elements["a2"].value != "" && theForm.elements["n"].value != "" && theForm.elements["c2"].value != ""){
    return true;
  }
  else {
    return false;
  }
}

function calculateResult(){
  if ( isRequiredFilledLeft() ){
    getVariablesLeft();
    // document.getElementById("1_1").innerHTML = j*j;
    leftResults[1] = j*j;
    leftResults[2] = f1*f1;
    leftResults[3] = 4 * a1 * a1;
    leftResults[4] = leftResults[1] + leftResults[2] + leftResults[3];
    leftResults[5] = 2*j*f1;
    leftResults[6] = Math.cos((720*c1/n) * (Math.PI/180));
    leftResults[7] = leftResults[5] * leftResults[6];
    leftResults[8] = leftResults[4] - leftResults[7];
    leftResults[9] = Math.sqrt(leftResults[8]);
    leftResults[10] = leftResults[9] - t1;
    result1 = leftResults[10]/2;

    if ( isRequiredFilledRight() ) {
      getVariablesRight();

      rightResults[1] = j*j;
      rightResults[2] = f2*f2;
      rightResults[3] = 4 * a2 * a2;
      rightResults[4] = rightResults[1] + rightResults[2] + rightResults[3];
      rightResults[5] = 2*j*f2;
      rightResults[6] = Math.cos((720*c2/n) * (Math.PI/180));
      rightResults[7] = rightResults[5] * rightResults[6];
      rightResults[8] = rightResults[4] - rightResults[7];
      rightResults[9] = Math.sqrt(rightResults[8]);
      rightResults[10] = rightResults[9] - t2;
      result2 = rightResults[10]/2;
    }
    printResults();
  }
}

function printResults(){
  document.getElementById("1_1").innerHTML = leftResults[1];
  document.getElementById("2_1").innerHTML = leftResults[2];
  document.getElementById("3_1").innerHTML = leftResults[3];
  document.getElementById("4_1").innerHTML = leftResults[4];
  document.getElementById("5_1").innerHTML = leftResults[5];
  document.getElementById("6_1").innerHTML = leftResults[6];
  document.getElementById("7_1").innerHTML = leftResults[7];
  document.getElementById("8_1").innerHTML = leftResults[8];
  document.getElementById("9_1").innerHTML = leftResults[9];
  document.getElementById("10_1").innerHTML = leftResults[10];
  document.getElementById("result1").innerHTML = result1;

  if (isRequiredFilledRight()){
    document.getElementById("2_2").innerHTML = rightResults[2];
    document.getElementById("3_2").innerHTML = rightResults[3];
    document.getElementById("4_2").innerHTML = rightResults[4];
    document.getElementById("5_2").innerHTML = rightResults[5];
    document.getElementById("6_2").innerHTML = rightResults[6];
    document.getElementById("7_2").innerHTML = rightResults[7];
    document.getElementById("8_2").innerHTML = rightResults[8];
    document.getElementById("9_2").innerHTML = rightResults[9];
    document.getElementById("10_2").innerHTML = rightResults[10];
    document.getElementById("result2").innerHTML = result2;
  }

}

function hideValues(){
  var theForm = document.forms["spokelengthform"];

  theForm.elements["j"].value = "";
  theForm.elements["f1"].value = "";
  theForm.elements["f2"].value = "";
  theForm.elements["t1"].value = "";
  theForm.elements["t2"].value = "";
  theForm.elements["a1"].value = "";
  theForm.elements["a2"].value = "";
  theForm.elements["n"].value = "";
  theForm.elements["c1"].value = "";
  theForm.elements["c2"].value = "";
  theForm.elements["e"].value = "";
}
