// click effect in nav 
let a = document.getElementsByTagName("a");

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function(){
        for (let j = 0; j < a.length; j++) {
            a[j].style.color = "";
            a[j].style.borderBottom = "";
        }
        this.style.color = "red";
        this.style.borderBottom = "2.5px solid red";
    });
}
 
// let submit = document.getElementById("submit");
// submit.addEventListener("click", function(){
//     alert("thank you");
// });