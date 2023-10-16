
const textareaEl = document.getElementById("textarea");
const totalEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("input", (e)=>{
    const len=e.target.value.length;
    console.log("current length",len);
    totalEl.innerHTML=len;
    remainingEl.innerText=50-len;
});
//hgdfghdf
