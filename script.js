const inputContainer = document.getElementById("input-container");
const validateBtn = document.getElementById("validate");
const inputs = document.querySelectorAll(".input");
const lastElt = inputContainer.children[inputContainer.children.length - 1];

let lastEltVal;
inputContainer.addEventListener("input", (e) => {
  const target = e.target;
  const nextSibling = target.nextElementSibling;
  if (nextSibling) {
    nextSibling.focus();
    lastEltVal = target.value;
  } else {
    target.value = lastEltVal;
  }
});

inputContainer.addEventListener("keyup", (e) => {
  const key = e.key;
  const target = e.target;
  if (key === "Backspace" || key === "Delete") {
    if (lastElt.id === target.id && target.value !== "") {
      target.value = "";
    } else if(target.previousElementSibling){
      target.previousElementSibling.value = "";
      target.previousElementSibling.focus();
    }
  }

  const isFieldFilled = isFilled() ? false : true;
  validate.disabled = isFieldFilled;
});

inputContainer.children[0].focus();

const isFilled = () => {
  let flag = true;
  inputs.forEach((elt) => {
    if (elt.value === "") {
      flag = false;
    }
  });
  return flag;
};

validate.addEventListener("click", () => {
  let otpValue = "";
  inputs.forEach((elt) => {
    otpValue = otpValue + elt.value;
    elt.value = ""
  });
  console.log("otpValue", otpValue)
  localStorage.setItem("otp", otpValue);
})
