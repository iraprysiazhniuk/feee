$(document).ready(function(){
    $("#helpDialog").hide();
});

function opendialog(){
    $("#helpDialog").fadeIn();
}
function closedialog(){
    $("#helpDialog").fadeOut();
}
function closeheader() { 
    $("#header").fadeOut();
    return false;
}
function changeAmount(that){
    let ammountInput=document.querySelector("#stockAmountInput");
    if(that.dataset.action==="-"){
        if(ammountInput.value>2){
            ammountInput.value--;
            changeCrown();
            document.querySelector(".summaryPrice").innerText="$ "+(+ammountInput.value*10.99).toFixed(2);
        }
        
    }
    else{
        if(ammountInput.value>=10000){
            ammountInput.value=10000;
            ammountInput.value--;
        }
        ammountInput.value++;
        document.querySelector(".summaryPrice").innerText="$ "+(+ammountInput.value*10.99).toFixed(2);
        changeCrown();
    }
}
function changeValue(){
    let ammountInput=document.querySelector("#stockAmountInput");
    if(ammountInput.value<2){
        ammountInput.value=2;
    }
    if(ammountInput.value>10000){
        ammountInput.value=10000;
    }
    changeCrown();
    document.querySelector(".summaryPrice").innerText="$ "+(+ammountInput.value*10.99).toFixed(2);
}
function onInput(){
    let ammountInput=document.querySelector("#stockAmountInput");

    document.querySelector(".summaryPrice").innerText="$ "+(+ammountInput.value*10.99).toFixed(2);
}

let ammountInput=document.querySelector("#stockAmountInput");

if(!localStorage.getItem('selectedPrice')){
    ammountInput.value=1;
}
else{
    ammountInput.value=+localStorage.getItem('selectedPrice');
}
changeValue();

localStorage.removeItem('selectedPrice');

$(document).ready(function(){
    $("#thankDialog").hide();
});

function openthankdialog(){
    $("#thankDialog").fadeIn();
}
function closethankdialog(){
    $("#thankDialog").fadeOut();
}
