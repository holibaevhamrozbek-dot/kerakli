const myForm = document.querySelector("#myForm");
const mainBox = document.querySelector("#mainBox");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(myForm);
  let results = {};
  for (let [name, value] of formData) {
    results[name] = value;
  }
  console.log(results);
  myForm.reset();c
});
