document.addEventListener('keydown',(e)=>{
const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
if (!key) return;
console.log(key);
})