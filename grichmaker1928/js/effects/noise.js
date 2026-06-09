import { randInt } from "../random.js";

export function applyNoise(
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

            if(
                Math.random()
                <
                settings.density
            ){

                data[p] =
                    randInt(0,255);

                data[p+1] =
                    randInt(0,255);

                data[p+2] =
                    randInt(0,255);
            }
        }

        ctx.putImageData(
            imageData,
            x,
            y
        );
    }
}
