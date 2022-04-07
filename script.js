score=0
cross=true 

audiogo=new Audio('music.mp3')
audiostop=new Audio('gameover.mp3')
setTimeout(() => {
    audiogo.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    scaore=0;
    if(e.keyCode==38)
    {
       dino=document.querySelector('.dino')
       dino.classList.add('animatedino')
        setTimeout(() => {
            dino.classList.remove('animatedino')
            
        }, 700);
        
    }
    else if(e.keyCode==39){
        dino=document.querySelector('.dino')
        dinox=dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=dinox+112+'px'

    }
    else if(e.keyCode==37){
        dino=document.querySelector('.dino')
        dinoy=dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=dinoy-112+'px'

    }
}


setInterval(() => {
    dino=document.querySelector('.dino')
    gameover=document.querySelector('.gameover')
    obstacle=document.querySelector('.obstacle')

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))

    offsetx=Math.abs(dx-ox)
    offsety=Math.abs(dy-oy)
    //console.log(offsetx,offsety)
    if(offsetx< 100  && offsety<53)
    {
        gameover.innerHTML="GAME OVER "
        obstacle.classList.remove('obstacleani')
        audiostop.play();
        setTimeout(() => {
            audiogo.pause();
            audiostop.pause();
        }, 1000);
    }
    else if( offsetx<145 && cross==true){
        score+=1
        updatescore(score)
        cross=false

        setTimeout(() => {
            cross=true
        }, 1000);
        setTimeout(() => {
            anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
            newdur=anidur-0.1;
            obstacle.style.animationDuration=newdur+'s';
        }, 500);
        

    }

}, 10);
function updatescore(score)
{
    scorecount.innerHTML="your score :"+ score
}