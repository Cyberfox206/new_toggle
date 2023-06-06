const b1 = document.getElementById("fs1");
const b2 = document.getElementById("fs2");
const b3 = document.getElementById("fs3");
const b4 = document.getElementById("fs4");
const b5 = document.getElementById("fs5");

b1.addEventListener("click", () => {
    b2.checked = !b2.checked;
    b4.checked = !b4.checked;
})
b2.addEventListener("click", () => {
    b3.checked = !b3.checked;
})
b3.addEventListener("click", () => {
    b4.checked = !b4.checked;
})
b4.addEventListener("click", () => {
    b2.checked = !b2.checked;
})
b5.addEventListener("click", () => {
    b1.checked = !b1.checked;
    b2.checked = !b2.checked;
    b3.checked = !b3.checked;
    b4.checked = !b4.checked;
})