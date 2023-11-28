let symbol= window.prompt("Enter symbol");
let rows = window.prompt("Enter number of rows");
let cols= window.prompt("Enter number of columns");
for(let i=1;i<=rows;i++){
    for(let j=1;j<=cols;j++){
        document.getElementById("myrectangle").innerHTML += symbol;
    }
    document.getElementById("myrectangle").innerHTML += "<br>";
}