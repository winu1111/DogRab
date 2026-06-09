import { randInt } from "../random.js";

export function applyInvert(
    ctx,
    canvas,
    settings
){

    for(let i=0;i<settings.count;i++){

        const size =
            randInt(
                settings.minSize,
                settings.maxSize
            );

        const x =
            randInt(
                0,
                canvas.width-size
            );

        const y =
            randInt(
                0,
                canvas.height-size
            );

        const imageData =
            ctx.getImageData(
                x,
                y,
                size,
                size
            );

        const data =
            imageData.data;

        for(let p=0;p<data.length;p+=4){

            data[p] =
                255-data[p];

            data[p+1] =
                255-data[p+1];

            data[p+2] =
                255-data[p+2];
        }

        ctx.putImageData(
            imageData,
            x,
            y
        );
    }
}
