let doc = document.querySelector("#mytext")
console.log(doc.value)


doc.addEventListener("change",(e) =>{
console.log(doc.value)
})