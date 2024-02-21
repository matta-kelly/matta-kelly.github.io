document.querySelector("h3").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });

const myImage = document.querySelector("img");

myImage.onclick = () => {
const mySrc = myImage.getAttribute("src");
if (mySrc === "images/photo-about.jpg") {
    myImage.setAttribute("src", "images/photo-photos.jpg");
} else {
    myImage.setAttribute("src", "images/photo-about.jpg");
}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Front end is kinda fun, dont you think ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Front end is kinda fun, dont you think ${storedName}`;
  }
  

myButton.onclick = () => {
    setUserName();
  };
  