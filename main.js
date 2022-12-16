// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// should change the background of #current-color div when a color is clicked
/* 
  example 
  const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    console.log("A button was clicked!");
  });
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("A button was clicked!");
});
}
*/

const paletteColor = document.querySelectorAll("#palette .color");

// console.log(paletteColor)

paletteColor.forEach((color) => {
  color.addEventListener("click", () => {
    const chosenColor = document.querySelector('#current-color')
    chosenColor.style.backgroundColor = color.style.backgroundColor;
  });

});

// should change cells to the currently selected color when clicked
/*
iterate through all cells 
add event listener: if cell is clicked, cell background color should be current color.

 */
const cells = document.querySelectorAll(".cell")
const current = document.querySelector("#current-color")
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = current.style.backgroundColor;
  });
})
