const paper = document.getElementById("paper"),
    pen = paper.getContext("2d")

// Draw a line from start point to end point
const drawLine = (start, end) => {
    pen.beginPath();
    pen.moveTo(start.x, start.y);
    pen.lineTo(end.x, end.y);
    pen.stroke();
}

// Draw an arc (for visualization during testing)
const drawArc = (x, y, radius, start, end) => {
    
    pen.beginPath();

    pen.strokeStyle = "gray";
    pen.arc(x, y, radius, start, end);

    pen.stroke();

}

// Draw a circle (outline or filled)
const drawCircle = (x, y, radius, action = "stroke") => {

    pen.beginPath();

    pen.arc(x, y, radius, 0, 2 * Math.PI)

    if (action === "stroke") pen.stroke();
    else pen.fill();
}

const pendulum = (x, y, cirRadius, arcRadius) => {

    // const velocity = 0.0005,
    //     maxAngle = 2 * Math.PI
    //     angle = Math.PI - (elapsedTime * velocity);
    //     modAngle = angle % maxAngle;
    //     angle = modAngle <= Math.PI && modAngle >= 0 ? modAngle : maxAngle - modAngle;
    const gravity = 1


    drawCircle(x, y, cirRadius)
    drawArc(x, y, arcRadius, 0, Math.PI);
}


let startTime = new Date().getTime();
const draw = () => {
    const currTime = new Date().getTime(),
        elapsedTime = (currTime - startTime)

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
    pen.lineWidth = 1;
    pen.fillStyle = "white";

    drawLine(start, end);
    drawLine({x:0, y: paper.height * 0.05}, {x:paper.width, y: paper.height * 0.05});
    

    pen.lineWidth = 2;

    const arcRadius = 500
    pendulum(center.x, center.y, 40, arcRadius)

    
    drawCircle(center.x, center.y - 50, 40)
    drawCircle(center.x, center.y - 100, 40)
    drawCircle(center.x, center.y + 50, 40)
    drawCircle(center.x, center.y + 100, 40)
    drawCircle(center.x, center.y + 150, 40)
    drawArc(center.x, center.y, 500, 0, Math.PI);

    requestAnimationFrame(draw)



    
}

draw();