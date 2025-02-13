const string=`.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before,.skin *::after{box-sizing: border-box;}

.skin{
    position: relative;
    min-height: 100vh;
    background: #ffe600;
}
.nose{
    border: 10px solid;
    border-color: black transparent transparent transparent;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 2;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 250ms infinite linear;
}
.yuan{
    position: absolute;
    border: 1px solid black;
    background-color: black;
    width: 20px;
    height: 6px;
    left: -10px;
    top:-16px;
    border-radius: 10px 10px 0 0;
    
}
.eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 0px;
}
.eye.left{
    transform: translate(-120px);
}
.eye.right{
    transform: translate(120px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}
.mouth .up .lip.left{   
    border-radius: 0 0 0 50px;   
    transform: rotate(-15deg) translateX(-53px);   
}
.mouth .up .lip.right{
    border-radius: 0px 0px 50px 0px;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.left::before{   
    right: -5px;
}
.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .down{
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 4;
}
.face>img{
    position: absolute;
    top: 50%;
    left: 50%;
}
.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}
.face.left>img{
    transform: rotateY(180deg);
    transform-origin: 0 0 ;
}
.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}
`

const player={
    let:undefined,
    time:100,
    ui:{
        demo:document.querySelector('#demo'),
        demo2:document.querySelector('#demo2') 
    },
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast',
    },
    n:1,
    init:()=>{
        player.ui.demo.innerText=string.substring(0,player.n)
        player.ui.demo2.innerHTML=string.substring(0,player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value=player.events[key]
                document.querySelector(key).onclick=player[value]
            }      
        }    
    },
    run:()=>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText=string.substring(0,player.n) 
        player.ui.demo2.innerHTML=string.substring(0,player.n)  
        player.ui.demo.scrollTop=demo.scrollHeight
    },
    play:()=>{
        player.id=setInterval(player.run,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time=300
        player.play()
    },
    normal:()=>{
        player.pause()
        player.time=100
        player.play()
    },
    fast:()=>{
        player.pause()
        player.time=0
        player.play()
    },
}

player.init()

