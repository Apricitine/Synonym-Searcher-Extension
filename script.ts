const textInputTag = document.querySelector("[Text-Input]");
let submittedValue:string;
console.log(`${textInputTag}`);
// @ts-ignore
textInputTag.focus();
// @ts-ignore
textInputTag.addEventListener("input", userInput => {
  // @ts-ignore
  submittedValue = userInput.target.value;
  console.log(submittedValue);
  return submittedValue;
});
// @ts-ignore
function enterText(e) {
  if (e.code === "Enter") {
    window.open(`https://www.google.com/search?q=${submittedValue}%20synonym`);
  }
}
document.onkeydown = enterText;
