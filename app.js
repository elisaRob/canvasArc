window.onload=function(){
    const canvas=document.querySelector("canvas");
    if(canvas && canvas.getContext){
        let ctx=canvas.getContext("2d");
        if(ctx){
            ctx.strokeStyle="red";
            ctx.fillStyle="blue";

            ctx.beginPath();
            ctx.arc(50,50,25,0,Math.PI,false);
            ctx.stroke();

            ctx.beginPath();
            //  ctx.arc(100,50,25,0*(Math.PI/180),90*(Math.PI/180),false);
            // ctx.arc(100,50,25,0,90*(Math.PI/180),false);
            ctx.arc(100,50,25,0,Math.PI/2,false);
             ctx.stroke();

             ctx.beginPath();
             ctx.arc(150,50,25,Math.PI*1.5,Math.PI,true);
             ctx.stroke();
           
        }
    }else{
        alert("Votre navigateur ne supporte pas les canvas")
    }
}