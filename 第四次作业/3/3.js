var password=document.getElementById("inp1")
var repassword=document.getElementById("inp2").value
function getVal(id) {//必须为字母加数字且长度不小于8位
    let myreg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,20}$/;
    let password=inp1.value
    myreg.test(password);
    if(myreg.test(password))
        {}else{
            alert("密码至少包含大写字母，小写字母，数字，且不少于8位");
        } 
}
    function Same(params) {
if(inp1.value == inp2.value) {    			  						 
    } else {				 
    alert("两次输入密码不一致!");	    		 			 
    } 
    



}