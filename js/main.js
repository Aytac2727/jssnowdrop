window.addEventListener("load", function(){
    let Load =document.getElementById("load");
    let Div = document.createElement("div");
    Load.appendChild(Div);
    
    let frames, dublicate, x, y;
    dublicate = Load.innerHTML;
    Load.innerHTML=dublicate.repeat(2);
    frames = Load.children;
    setInterval(function(){
        x = document.documentElement.clientWidth-10;
        y = document.documentElement.clientHeight-10;
        for (let i=0;i<frames.length;i++) {
            frames[i].setAttribute("style", "border-radius:50%; position:absolute; height:10px; width:10px; left:" + Math.random() *x +"px; top:" + 
            Math.random() * y + "px;")
        }
    },1)

})