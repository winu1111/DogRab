import { randInt } from "../random.js";

export function applyBlock(
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

        const block =
            ctx.getImageData(
                x,
                y,
                size,
                size
            );

        const dx =
            x +
            randInt(
                -settings.strength,
                settings.strength
            );

        const dy =
            y +
            randInt(
                -settings.strength,
                settings.strength
            );

        ctx.putImageData(
            block,
            dx,
            dy
        );
    }
}
