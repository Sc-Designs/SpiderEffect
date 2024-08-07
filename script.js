var canvas = document.getElementById('dotcanvas');
var landing = document.getElementById('landing');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');

let dots = [];
let colors = "#ffffff3f";
for (let i = 0; i < 90 ; i++) {
    dots.push(
        {
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 6,
            color: colors
        }
    )
}
const Drawdots = ()=>{
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
        ctx.fill();
    });
}

landing.addEventListener('mousemove', (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Drawdots();
    let mouse = {
        x: e.pageX - landing.getBoundingClientRect().left,
        y: e.pageY - landing.getBoundingClientRect().top,   
    }
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x)**2 + (mouse.y - dot.y)**2)
        if(distance < 200){
            dot.color = "#fff"
            ctx.strokeStyle = dot.color;
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        else {
            dot.color = colors
        }
    })
})
landing.addEventListener('mouseout',() =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Drawdots();
}),
Drawdots();