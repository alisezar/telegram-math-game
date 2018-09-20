var i;
var i;
for (i = 0; i < 100; i++) {
if(document.getElementById=task_op.innerHTML=="+"){
var ans=0;
var res=0;
var x=0;
var y=0;
var res= document.getElementById=task_res.innerHTML;
var x= document.getElementById=task_x.innerHTML;
var y= document.getElementById=task_y.innerHTML;
var ans=x+y;
if(document.getElementById=task_res.innerHTML==ans){
document.getElementById=button_correct.click();
}else{
document.getElementById=button_wrong.click();
}
}
if(document.getElementById=task_op.innerHTML=="×"){
var ans=0;
var res=0;
var x=0;
var y=0;
var res= document.getElementById=task_res.innerHTML;
var x=  parseInt(document.getElementById=task_x.innerHTML);
var y=  parseInt(document.getElementById=task_y.innerHTML);
var ans=x*y;
if(document.getElementById=task_res.innerHTML==ans){
document.getElementById=button_correct.click();
}else{
document.getElementById=button_wrong.click();
}
} else if(document.getElementById=task_op.innerHTML=="+"){
var ans=0;
var res=0;
var x=0;
var y=0;
var res= document.getElementById=task_res.innerHTML;
var x= parseInt(document.getElementById=task_x.innerHTML);
var y= parseInt(document.getElementById=task_y.innerHTML);
var ans=x+y;
if(document.getElementById=task_res.innerHTML==ans){
document.getElementById=button_correct.click();
}else{
document.getElementById=button_wrong.click();
}
}else if(document.getElementById=task_op.innerHTML=="–"){
var ans=0;
var res=0;
var x=0;
var y=0;
var res= document.getElementById=task_res.innerHTML;
var x= parseInt(document.getElementById=task_x.innerHTML);
var y= parseInt(document.getElementById=task_y.innerHTML);
var ans=x-y;
if(document.getElementById=task_res.innerHTML==ans){
document.getElementById=button_correct.click();
}else{
document.getElementById=button_wrong.click();
}
}else if(document.getElementById=task_op.innerHTML=="/"){
var ans=0;
var res=0;
var x=0;
var y=0;
var res= document.getElementById=task_res.innerHTML;
var x= parseInt(document.getElementById=task_x.innerHTML);
var y= parseInt(document.getElementById=task_y.innerHTML);
var ans=x/y;
if(document.getElementById=task_res.innerHTML==ans){
document.getElementById=button_correct.click();
}else{
document.getElementById=button_wrong.click();
}
}
}
