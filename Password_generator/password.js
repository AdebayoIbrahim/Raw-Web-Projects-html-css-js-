const ouput = document.querySelector(".output");
const gen = document.querySelector("button");
const length = document.querySelector("#len");

function getPassword(len) {
  let arr = [];
  for (i = 0; i < len; i++) {
    const calculated = Math.floor(Math.random() * 10);
    arr = [...arr, calculated];
  }
  ouput.innerHTML = arr.join("");
}
gen.addEventListener("click", () => {
  const lengthVal = Number(length.value);
  getPassword(lengthVal);
});
