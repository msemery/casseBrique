 var canvas;
 var context;

 function initCanvas() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    context.beginPath();
    
    context.fill();
    var abssis = 0; 
    var colors = ["#f4427a", "#ef53be","#d252ef","#8653ed","#53a4ef","#53efed","#54eab1","#52e56d","#9edb4e","#e0c150" ]
    for (let i = 0; i < 10; i++) {
        
        context.rect(abssis, 40, 40, 40);
        abssis += 50;
        
        context.fillStyle = colors[i];
        context.fill();
        
    }
    context.closePath();
    context.beginPath();
    for (let i = 0; i < 10; i++) {
        
        context.rect(abssis, 100, 90, 40);
        abssis += 50;
        
        context.fillStyle = colors[i];
        context.fill();
        
    }
    context.closePath();

 }