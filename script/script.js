var num = document.getElementById("number");
var Price1 = document.getElementById("Price1");
var itemprice = document.getElementById("itemPrice");
var priceTotal = document.getElementById("priceTotal");


function showPopup() {    // 사용자정의 함수명
    document.getElementById("modalArea").style.display="block";
}

function popUpClose() {
    document.getElementById("modalArea").style.display="none";
}

function numUp(){

    var numChk = document.getElementById("number").value;

    if( numChk.trim() == ""){
        num.value = 1;
    }
    else if( numChk.trim() >= 99) {
        alert("100개 이상은 따로 문의주세요.");
        num.value = 99;
    }
    else{
    num.value = parseInt(num.value) + 1;
    itemprice.innerText = parseInt(Price1.innerText)*(num.value);
    priceTotal.innerText = itemprice.innerText;
    }
}

function numDown(){

    if(parseInt(num.value) > 1 ){
    num.value = parseInt(num.value) - 1;

    itemprice.innerText = parseInt(Price1.innerText)*(num.value);
    priceTotal.innerText = itemprice.innerText;
    }
}

function fnReCalc(){
    var chk = document.getElementById("number").value;

   if( chk.trim() == "" || chk.trim() == 0 ) {
       alert("상품수량을 정확히 입력해주세요.");
       num.value = 1;
       num.focus();
   }
    else if( chk.trim() >= 99) {
        alert("100개 이상은 따로 문의주세요.");
        num.value = 99;
         itemprice.innerText = parseInt(Price1.innerText)*(num.value);
    priceTotal.innerText = itemprice.innerText;

    }
    else{
        var nt = document.getElementById("number").value;
        priceTotal.innerText = nt * parseInt(Price1.innerText);
        itemprice.innerText = nt * parseInt(Price1.innerText);
    }
}

function chkNum(){

    var chk = document.getElementById("number").value;

    if( isNaN(chk) == true){
        alert("숫자만 입력가능합니다.");
       num.value= 1;
    }

}


