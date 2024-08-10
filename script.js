// const disp=document.getElementById("input")
// const zero=document.getElementById("num0")
// const one=document.getElementById("num1")
// const two=document.getElementById("num2")
// const three=document.getElementById("num3")
// const four=document.getElementById("num4")
// const five=document.getElementById("num5")
// const six=document.getElementById("num6")
// const seven=document.getElementById("num7")
// const eight=document.getElementById("num8")
// const nine=document.getElementById("num9")
// const add=document.getElementById("+")
// const sub=document.getElementById("-")
// const mul=document.getElementById("*")
// const div=document.getElementById("/")
// const equal=document.getElementById("equal")
// const clear=document.getElementById("clear")
// let val=''


// zero.addEventListener("click",function(){
//     val+="0"
//     disp.value=val  
// })
// one.addEventListener("click",function(){
//     val+="1"
//     disp.value=val
// })
// two.addEventListener("click",function(){
//     val+="2"
//     disp.value=val   
// })
// three.addEventListener("click",function(){
//     val+="3"
//     disp.value=val
// })
// four.addEventListener("click",function(){
//     val+="4"
//     disp.value=val   
// })
// five.addEventListener("click",function(){
//     val+="5"
//     disp.value=val
// })
// six.addEventListener("click",function(){
//     val+="6"
//     disp.value=val   
// })
// seven.addEventListener("click",function(){
//     val+="7"
//     disp.value=val
// })
// eight.addEventListener("click",function(){
//     val+="8"
//     disp.value=val   
// })
// nine.addEventListener("click",function(){
//     val+="9"
//     disp.value=val
// })
// add.addEventListener("click",function(){
//     op=1
//     fnum=Number(disp.value)
//     val=''
//     disp.value=''
// })
// sub.addEventListener("click",function(){
//     op=2
//     fnum=Number(disp.value)
//     val=''
//     disp.value=''
// })
// mul.addEventListener("click",function(){
//     op=3
//     fnum=Number(disp.value)
//     val=''
//     disp.value=''
// })
// div.addEventListener("click",function(){
//     op=4
//     fnum=Number(disp.value)
//     val=''
//     disp.value=''
// })
// clear.addEventListener("click",function(){
//     fnum=''
//     snum=''
//     val=''
//     disp.value=''
// })
// equal.addEventListener("click",function(){
//     snum=Number(disp.value)
//     if(op==1){
//         disp.value=fnum+snum
//     }
//     else if(op==2){
//         disp.value=fnum-snum
//     }
//     else if(op==3){
//         disp.value=fnum*snum
//     }
//     else if(op==4){
//         disp.value=fnum/snum
//     }
// })
let disp=document.getElementById("input")
function appendtodisplay(input){
    disp.value+=input
}
function cleardisplay(){
    disp.value=''
}
function calculate(){
    if(disp.value==''){
        disp.value="ENTER A VALUE"
    }
    else{
        try{
            disp.value=eval(disp.value)
        }
        catch{
            disp.value="ERROR"
        }
    }

}
