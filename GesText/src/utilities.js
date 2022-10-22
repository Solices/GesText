
const labelMap = {
    1:{name:'a', color:'lime'},
    2:{name:'b', color:'yellow'},
    3:{name:'c', color:'red'},
    4:{name:'d', color:'blue'},
    5:{name:'e', color:'purple'},
    6:{name:'f', color:'aquamarine'},
    7:{name:'g', color:'burlywood'},
    8:{name:'h', color:'cyan'},
    9:{name:'i', color:'darkblue'},
    10:{name:'j', color:'darkorchid'},
    11:{name:'k', color:'deeppink'},
    12:{name:'l', color:'forestgreen'},
    13:{name:'m', color:'gold'},
    14:{name:'n', color:'indigo'},
    15:{name:'o', color:'ivory'},
    16:{name:'p', color:'lightsalmon'},
    17:{name:'q', color:'midnightblue'},
    18:{name:'r', color:'seashell'},
    19:{name:'s', color:'powderblue'},
    20:{name:'t', color:'palevioletred'},
    21:{name:'u', color:'teal'},
    22:{name:'v', color:'turquoise'},
    23:{name:'w', color:'yellowgreen'},
    24:{name:'x', color:'slateblue'},
    25:{name:'y', color:'mediumspringgreen'},
    26:{name:'z', color:'fuchsia'},
    27:{name:'hello', color:'lime'},
    28:{name:'my', color:'lime'},
    29:{name:'name', color:'lime'},
    30:{name:'interpreter', color:'lime'},
}






export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
for(let i=0; i<=boxes.length; i++){
    if(boxes[i] && classes[i] && scores[i]>threshold){
        const [y,x,height,width] = boxes[i]
        const text = classes[i]
        ctx.strokeStyle = labelMap[text]['color']
        ctx.lineWidth = 10
        ctx.fillStyle = 'white' 
        ctx.font = '30px Arial'         
        ctx.beginPath()
        ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
        ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
        ctx.stroke()
    }
}



}
export function wordt (boxes, classes, scores, threshold)
{
for(let i=0; i<=boxes.length; i++){
    if(boxes[i] && classes[i] && scores[i]>threshold){
        const text = classes[i]
            return labelMap[text]['name']
    }
    else
        return "";
}
}