const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['violet','red','blue','yellow','green','indigo'];
document.addEventListener('click',function(){
    body.style.background=color[Math.floor(Math.random()*color.length)];
});
