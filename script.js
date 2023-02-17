const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const imageScene = document.querySelector("#image-scene");

button1.addEventListener("click", function () {
  imageScene.querySelector("#image").setAttribute("src", "cat.jpg");
});

button2.addEventListener("click", function () {
  imageScene.querySelector("#image").setAttribute("src", "milkeyway.jpg");
});

button3.addEventListener("click", function () {
  imageScene
    .querySelector("#image")
    .setAttribute("src", "Fog_530064_6000x3000.jpg");
});
