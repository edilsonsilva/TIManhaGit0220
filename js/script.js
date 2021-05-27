var b1 = document.getElementById("btn1");
var b2 = document.getElementById("btn2");
var b3 = document.getElementById("btn3");

b1.onclick = ()=>{
    alert("Você clicou no link 1");
}

b2.onclick = () => {
    document.getElementById("context").style.display="none";
}
b3.onclick = () => {
    document.getElementById("context").style.display="block";
}