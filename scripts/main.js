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

