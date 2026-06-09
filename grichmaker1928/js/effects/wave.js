import { randInt } from "../random.js";

export function applyWave(
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

        waveRegion(
            ctx,
            x,
            y,
            size,
            size,
            settings.amplitude
        );
    }
}

function waveRegion(
    ctx,
    x,
    y,
    w,
    h,
    amp
){

    const source =
        ctx.getImageData(
            x,
            y,
            w,
            h
        );

    const target =
        ctx.createImageData(
            w,
            h
        );

    for(let py=0;py<h;py++){

        const shift =
            Math.floor(
                Math.sin(py*0.15)
                *
                amp
            );

        for(let px=0;px<w;px++){

            let sx =
                px + shift;

            sx =
                Math.max(
                    0,
                    Math.min(
                        w-1,
                        sx
                    )
                );

            const src =
                (
                    py*w+sx
                )*4;

            const dst =
                (
                    py*w+px
                )*4;

            target.data[dst]
                =
                source.data[src];

            target.data[dst+1]
                =
                source.data[src+1];

            target.data[dst+2]
                =
                source.data[src+2];

            target.data[dst+3]
                =
                source.data[src+3];
        }
    }

    ctx.putImageData(
        target,
        x,
        y
    );
}
