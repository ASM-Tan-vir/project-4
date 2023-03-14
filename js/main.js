function cleanObj(){
    document.getElementById("display").value = ""
}

function calculator(taikenValue){
    document.getElementById("display").value += taikenValue;
}


//with only eval
// function result(){
//     let a = document.getElementById("display").value;
//     let b = eval(a);
//     document.getElementById("display").value = b;
// }

//eval & if else
function result(){
    let display = document.getElementById("display");
    let a = document.getElementById("display").value;
    let b = eval(a);
    if (isNaN(b)){
        display.value = "";
    }else{
        display.value = b;
    }
}
