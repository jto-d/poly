const paper = document.getElementById("paper"),
    pen = paper.getContext("2d")

// Draw a line from start point to end point
const drawLine = (start, end) => {
    pen.beginPath();
    pen.moveTo(start.x, start.y);
    pen.lineTo(end.x, end.y);
    pen.stroke();
}

// Draw a circle (outline or filled)
const drawCircle = (x, y, radius, start, end, action = "stroke") => {

    pen.beginPath();

    pen.arc(x, y, radius, start, end)

    if (action === "stroke") pen.stroke();
    else pen.fill();
}



const draw = () => {
    paper.width = paper.clientWidth;
    paper.height = paper.clientHeight;


    // intersection point at the crosshair
    const start = {
        x: paper.width * 0.5,
        y: paper.height * 0.05
    }

    
    const end = {
        x: paper.width * 0.5,
        y: paper.height
    }

    // center of the canvas
    const center = {
        x: paper.width * 0.5,
        y: paper.height * 0.5
    }

    pen.strokeStyle = "white";
    pen.lineWidth = 0.5;

    drawLine(start, end);
    drawLine({x:0, y: paper.height * 0.05}, {x:paper.width, y: paper.height * 0.05});

}

draw();