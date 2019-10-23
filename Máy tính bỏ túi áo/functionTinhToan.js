//--------------------------------------------------//
//-----------------Tính toán-----------------------//
//------------------------------------------------//
var soTruoc; // Số trước
var soSau; // Số sau
var phepT; // Phép tính
var display = ""; // Nội dung hiển thị
var output = document.getElementsByClassName('output')[0]; // Ô hiển thị số nhập và kết quả
var buttonNumber = document.getElementsByClassName('number'); // Button số
var buttonAction = document.getElementsByClassName('action'); // Button chứa phép toán và xóa

//----------Tính toán kết quả--------------//
//---Xét xem phép tính trước đó là gì để thực hiện phép tính---//
function tinhToan() {
    switch(phepT){
        case '+':
            soTruoc = soTruoc + soSau;
        break;
        case '-':
            soTruoc = soTruoc - soSau;
        break;
        case '*':
            soTruoc = soTruoc * soSau;
        break;
        case '/':
            soTruoc = soTruoc / soSau;
        break;
    }
}

//---------Chọn số-----------//
function chonSo(){
    if(phepT == undefined) {
        if(soTruoc!=undefined) {
            soTruoc = Number(soTruoc+this.value);
            display = String(soTruoc);
        }
        else{
            soTruoc = Number(this.value);
            display = display+soTruoc;
        }
    }
    else {
        if(soSau==undefined) {
            soSau = Number(this.value); 
            display = display+soSau;
        } else {
            soSau = Number(soSau+this.value); 
            display = display+this.value;
        }
    }
    output.value = display;
}

//Tạo phép tính
function phepTinh(){
    if(this.value != 'Xóa') {
        if(soTruoc != undefined) {
            phepT = this.value;
            display = display+phepT;
            output.value = display;
        } else if(this.value == '+' || this.value == '-'){
            soTruoc = this.value;
            display = soTruoc;
            output.value = display;
        } else
            output.value = 'Nhập giá trị đầu tiên';
    } else {
        soTruoc = undefined;
        soSau = undefined;
        display = "";
        output.value = 0;
        
    }
}

//Hiển thị kết quả
function ketQua() {
    //--Sử dụng hàm tính mặc định của JS-----> screen.placeholder = eval(display);
    if(soTruoc!=undefined){
        tinhToan();
        output.value = soTruoc;
        display = soTruoc;
        phepT = undefined;
        soSau = undefined;
        /*---->Bỏ thực hiện tính toán giữa kết quả cũ và số nhập tiếp theo<---------
        soTruoc = undefined;
        display = ""; */
        
    } else
        output.value = 0;
}

//-------Gán sự kiện cho các button---------//
for(var i=0; i<buttonAction.length; i++)
    buttonAction[i].onclick = phepTinh;
for(var i=0; i<buttonNumber.length; i++)
    buttonNumber[i].onclick = chonSo;