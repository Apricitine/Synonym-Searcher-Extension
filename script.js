const textInputTag = document.querySelector("[Text-Input]");
const submitTextTag = document.querySelector("[Submit-Input]");
let submittedValue = null;
console.log(`${textInputTag}`);

textInputTag.addEventListener("input", userInput => {
  submittedValue = userInput.target.value;
  console.log(submittedValue);
  return submittedValue;
});
submitTextTag.addEventListener("click", () => {
  window.open(`https://www.google.com/search?q=${submittedValue}%20synonym`);
});

function enterText(e) {
  if (e.code === "Enter") {
    window.open(`https://www.google.com/search?q=${submittedValue}%20synonym`);
  }
}
document.onkeydown = enterText;

