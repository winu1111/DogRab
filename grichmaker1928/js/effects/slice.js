import { randInt } from "../random.js";

export function applySlice(
    ctx,
    canvas,
    settings
){

    for(let i=0;i<settings.count;i++){

        const h =
            randInt(
                settings.minSize,
                settings.maxSize
            );

        const y =
            randInt(
                0,
                canvas.height-h
            );

        const offset =
            randInt(
                settings.minStrength,
                settings.maxStrength
            ) *
            (
                Math.random()>0.5
                ?1
                :-1
            );

        const block =
            ctx.getImageData(
                0,
                y,
                canvas.width,
                h
            );

        ctx.putImageData(
            block,
            offset,
            y
        );
    }
}
