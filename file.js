//---------1--------avelacnum e box-toys tarrery----------------
const toys = [
    {img: "./nkar/1.jpg",name: "Developing cabin", price : "$ 50 USD", button: "Add"},
    {img: "./nkar/2.jpg",name: "Mini kitchen",price : "$ 100 USD",button: "Add"},
    {img: "./nkar/3.jpg",name: "Maze",price : "$ 20 USD",button: "Add"},
    {img: "./nkar/4.jpg",name: "Maze and logic box",price : "$ 40 USD",button: "Add"},
    {img: "./nkar/5.webp",name: "A rocket",price : "$ 30 USD",button: "Add"},
    {img: "./nkar/6.webp",name: "Excavator",price : "$ 30 USD",button: "Add"},
    {img: "./nkar/7.webp",name: "Mini kitchen",price : "$ 100 USD",button: "Add"}
]

function addProduct(name, price,img,button,div) {

const name_of_toy = document.createTextNode(name);
const price_of_toy = document.createTextNode(price);
const price_of_button = document.createTextNode(button);

const newDiv = document.createElement("div");
const newH2 = document.createElement("h4");
const newP = document.createElement("p");
const newIMG = document.createElement("img");
const newButton = document.createElement("button");
const newDiv2 = document.createElement("div");

newH2.appendChild(name_of_toy);
newP.appendChild(price_of_toy);
newButton.appendChild(price_of_button);
    
newIMG.src = img;
newDiv.append(newIMG, newH2, newP,newButton,newDiv2);

newDiv.className = "box-toys";
newButton.className="kochak";
newDiv2.className = "number";

const currentDiv = document.getElementById("box-toys1");
currentDiv.appendChild(newDiv);
}

for(let i = 0; i < toys.length; i ++){
    addProduct(toys[i].name, toys[i].price, toys[i].img, toys[i].button)
}

// //---------2--------sexmelov button-in zambyuxn avelanu e 1-ov
let qanak=document.getElementById("zambyux");
let buttons = document.getElementsByClassName("kochak");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    
    function anun () {
        qanak.innerHTML++
        zambyux.style="background-color: #353069;"
    };
    buttons[i].addEventListener("click",anun)
}

////-----------3-------headr
