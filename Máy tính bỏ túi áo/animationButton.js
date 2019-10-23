//-----------------------------------------------------------//
//------------------Animation button------------------------//
//---------------------------------------------------------//
window.onload = function() {
    var mayTinh = document.getElementsByClassName('may-tinh')[0];  // Khung máy tính
    var output = document.getElementsByClassName('output')[0]; // Ô hiển thị kết quả
    var displayViewButton = document.getElementsByClassName('view-button')[0]; // Khung chứa button
    var displayButtonNumber = document.getElementsByClassName('number'); // Các button number
    var displayButtonAction = document.getElementsByClassName('action'); // Các button action

    //---Hiển thị máy tính----//
    mayTinh.style.marginTop = "50px";
    mayTinh.style.transition = "1s";

    //---Hiển thị ô kết quả----//
    setTimeout(function(){
        output.style.width = "80%";
        output.style.transition = "1s";
    },500);
    
    //---Hiển thị khung chứa button---//
    setTimeout(function(){
        displayViewButton.style.marginTop = "20px";
        displayViewButton.style.transition = "1s";
        var i=0;

        //---Hiển thị các buttonNumber---//
        var intervalButtonNumber = setInterval(function(){
                if(i<=displayButtonNumber.length) {
                    displayButtonNumber[i].style.height = "50px";
                    ++i;
                    console.log("Number: "+i);
                } else {
                    clearInterval(intervalButtonNumber);
                }
                 
        },80);
    },500);
    
    //---Hiển thị các buttonAction---//
   i=0;
    setTimeout(function(){
        var intervalButtonAction = setInterval(function(){
            if(i <= displayButtonAction.length) {
                displayButtonAction[i].style.height = "50px";
                ++i;
                console.log("Action: "+i);
            } else {
                clearInterval(intervalButtonAction);
            } 
        },80);
    },1300);

    //---Hiển thị button Xóa---//
    setTimeout(function(){
        document.getElementsByClassName('ket-qua')[0].style.height = "50px";
        document.getElementsByClassName('ket-qua')[0].style.transition = "1s";
    },1700);
};