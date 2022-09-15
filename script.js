function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function c(){
  document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}
function append(){
  document.getElementById("result").value=document.getElementById("result").value+"00";
}
