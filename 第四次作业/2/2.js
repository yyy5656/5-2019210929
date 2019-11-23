var sub=document.getElementById("sub");
var inp=document.getElementById("inp");
sub.onclick=function (params) {
    let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    let number=inp.value;
    myreg.test(number);
    if(myreg.test(number))
    {
        alert("提交成功")
    }else{
        alert("格式有错误")
    }
    
}
