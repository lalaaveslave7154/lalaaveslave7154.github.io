// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x1 = 0, y1 = 0, dx1 = 5, dy1 = 5, r1 = 20, color1 = "#B8B8FF", m1 = 4;
let x2 = canvas.width, y2 = 0, dx2 = 5, dy2 = 5, r2 = 10, color2 = "#005C11", m2 = 1;

// 畫圓形
function drawBall(x1, y1, r1, color1)
{
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
}
function drawBall(x2, y2, r2, color2)
{
    ctx.beginPath();
    ctx.arc(x2, y2, r2, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.closePath();
}


// 更新畫布

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

	x1 = x1 + dx1;
    y1 = y1 + dy1;
	
    x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    if(x1 > canvas.width || x1 < 0) dx1 = - dx1;
	if(y1 > canvas.height || y1 < 0) dy1 = - dy1;
	
	if(x2 > canvas.width || x2 < 0) dx2 = - dx2;
	if(y2 > canvas.height || y2 < 0) dy2 = - dy2;

	if ((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) < (r1+r2)*(r1+r2))
	{
		let Vx = ((m1*dx1)+(m2*dx2))/(m1+m2);
		dx1 = 2*Vx - dx1;
		dx2 = 2*Vx - dx2;
		
		let Vy = ((m1*dy1)+(m2*dy2))/(m1+m2);
		dy1 = 2*Vy - dy1;
		dy2 = 2*Vy - dy2;
	}
		
    drawBall(x1, y1, r1, color1);
	drawBall(x2, y2, r2, color2);
    requestAnimationFrame(draw);
}
draw();