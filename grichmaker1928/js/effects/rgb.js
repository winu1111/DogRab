import {
    rand,
    randInt
}
from "../random.js";

export function applyRGB(
    ctx,
    canvas,
    settings
){

    for(
        let i=0;
        i<settings.count;
        i++
    ){

        const size =
            randInt(
                settings.minSize,
                settings.maxSize
            );

        const strength =
            randInt(
                settings.minStrength,
                settings.maxStrength
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

        rgbRegion(
            ctx,
            x,
            y,
            size,
            size,
            strength
        );
    }
}

function rgbRegion(
    ctx,
    x,
    y,
    w,
    h,
    shift
){

    const imageData =
        ctx.getImageData(
            x,
            y,
            w,
            h
        );

    const copy =
        new Uint8ClampedArray(
            imageData.data
        );

    const data =
        imageData.data;

    for(
        let py=0;
        py<h;
        py++
    ){

        for(
            let px=0;
            px<w;
            px++
        ){

            const src =
                (
                    py*w+px
                )*4;

            const shiftedX =
                Math.min(
                    w-1,
                    px+shift
                );

            const dst =
                (
                    py*w+
                    shiftedX
                )*4;

            data[dst] =
                copy[src];
        }
    }

    ctx.putImageData(
        imageData,
        x,
        y
    );
}
