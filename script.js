function clearScreen() {
    document.getElementById("calc-operation").value = "";
    document.getElementById("calc-typed").value = "";
    document.getElementById("calc-operation").innerHTML = "";
    document.getElementById("calc-typed").innerHTML = "";
}
function display(value) {
  if(value==='.' && document.getElementById("calc-typed").innerHTML.includes('.')){
    document.getElementById("calc-typed").innerHTML =0.;
  }
    document.getElementById("calc-typed").innerHTML += value;
 
}
function op(value){
  document.getElementById("calc-operation").innerHTML = document.getElementById("calc-typed").innerHTML+value;
  document.getElementById("calc-typed").innerHTML='';
 // display(value);
 
 
}

function calculate(value) {
    var p = document.getElementById("calc-operation").innerHTML+document.getElementById('calc-typed').innerHTML;
    var q = eval(p);
    document.getElementById("calc-operation").innerHTML=p+value;
    document.getElementById("calc-typed").innerHTML = Math.round(q * 100000) / 100000;

}
function c(){
  document.getElementById("calc-typed").innerHTML = document.getElementById("calc-typed").innerHTML.slice(0, -1);
  if(document.getElementById("calc-typed").innerHTML ===''){
    document.getElementById("calc-typed").innerHTML =0;
  }
}
function append(){
  document.getElementById("calc-typed").innerHTML+="00";
}
