// Your code goes here

window.addEventListener("load",function(){
    alert("Welcome to the BUS PARTY!!!!");
});

let links = document.querySelector(".nav").children;
let colors = ["AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed ","Indigo ","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen "];
for (let i = 0; i < links.length; i++){
    links[i].addEventListener("mouseover", function(){
        this.style.color = "green";
    });
    links[i].addEventListener("mouseout", function(){
        this.style.color = "black";
    });
    links[i].addEventListener("click", (event) => {
        event.target.style.backgroundColor = "blue";
        event.stopPropagation();
        event.preventDefault();
    });
}

let text = document.querySelectorAll("p,a,h1,h2,h3,h4,h5,.btn");
document.addEventListener('keypress', function(){
    for (let i = 0; i < text.length; i++){
        text[i].style.color = colors[getRandomInt(colors.length)];
    }
});
let buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let newNode = document.createElement("p");
        let textNode = document.createTextNode("Don't do it. It's expensive!");
        newNode.appendChild(textNode);
        this.parentNode.append(newNode);
    });
}

let home = document.querySelector(".logo-heading");
home.addEventListener("click", resetPage);
home.addEventListener("mouseenter", (event) => {
    event.target.classList.add("hover");
});
home.addEventListener('mouseleave', (event) => {
    event.target.classList.remove("hover");
});
let footer = document.querySelector(".footer");
document.addEventListener("scroll", function() {
    let newLink = document.createElement("a");
    newLink.classList.add("nav-link");
    let textNode = document.createTextNode("I am a Link!");
    newLink.href="#";
    newLink.appendChild(textNode);
    footer.append(newLink);
    
});
let nav = document.querySelector("header");
nav.addEventListener("click", (event) => {
    event.target.style.border = "2px solid red";
})

let pTags = document.querySelectorAll("p");
pTags.forEach((p) => {
    p.addEventListener("mouseover", (event) => {
        TweenLite.to(event.target, 1, {scale:1.5, backgroundColor:"blue", color:"white",borderRadius:"10px"});
    });
    p.addEventListener("mouseleave", (event) => {
        TweenLite.to(event.target,1,{scale:1.0, backgroundColor:"none",color:"black"});
    });
});

// Helper Functions
function resetPage(){
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "black";
    }
    for (let i = 0; i < buttons.length; i++) {
        let parentDiv = buttons[i].parentNode;
        while (parentDiv.childNodes[7]) {
            parentDiv.removeChild(parentDiv.childNodes[7]);
        }
    }
    while (footer.childNodes[2]) {
        footer.removeChild(footer.childNodes[2]);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}