var colours = [
  "#C6CDD7", "#4CADCF", "#72BAD7", "#94C8DE",
  "#80AEC1", "#8071B4", "#9487C0", "#AA9FCE",
  "#B6ADD5", "#F58220", "#F89848", "#FAB072",
  "#FCBC86", "#E11E3C", "#E65A57", "#EB8376",
  "#EE9588", "#C3DC81", "#D1E49E", "#D8E8AE",
  "#57C1A5", "#7DCBB5", "#9ED6C5", "#AEDCCE"
];

var name = "Lee Crossley",
    nameSplit = name.split(" "),
    initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();

var charIndex = initials.charCodeAt(0) - 65,
    colourIndex = charIndex % 19;

var canvas = document.getElementById("user-icon");
var context = canvas.getContext("2d");

var canvasWidth = $(canvas).attr("width"),
    canvasHeight = $(canvas).attr("height"),
    canvasCssWidth = canvasWidth,
    canvasCssHeight = canvasHeight;

if (window.devicePixelRatio) {
    $(canvas).attr("width", canvasWidth * window.devicePixelRatio);
    $(canvas).attr("height", canvasHeight * window.devicePixelRatio);
    $(canvas).css("width", canvasCssWidth);
    $(canvas).css("height", canvasCssHeight);
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
}

context.fillStyle = colours[colourIndex];
context.fillRect (0, 0, canvas.width, canvas.height);
context.font = "128px Arial";
context.textAlign = "center";
context.fillStyle = "#FFF";
context.fillText(initials, canvasCssWidth / 2, canvasCssHeight / 1.5);