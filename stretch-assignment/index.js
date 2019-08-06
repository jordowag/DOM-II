// * click
// * mousedown
// * mouseup
// * scroll
// * keydown
let blockDiv = document.querySelector(".blocks");
let blocks = document.querySelectorAll(".block");
let timerID;
blocks.forEach((block) => {
    block.style.position = "relative";
    block.addEventListener("click", (event) => { 
        TweenLite.to(event.target, 1, {scale:0}),
        setTimeout(() => {blockDiv.removeChild(event.target)}, 1000);
        setTimeout(() => {blockDiv.prepend(event.target)}, 1000);
        setTimeout(() => {TweenLite.to(event.target, 1, {scale:1})}, 1000);
    });

    block.addEventListener("mousedown",(event) => {
        moveBlock(event);
    });

});
let block;
document.addEventListener("mouseup",(event) => {
    moveBlockBack(block);
})

function moveBlock(event) {
    block = event.target;
    let tl = new TimelineLite();
    tl.to(event.target,5, {left:"1000%"});
}

function moveBlockBack(target) {
    let tl = new TimelineLite();
    tl.to(target, 3, {left:"0%"});
}