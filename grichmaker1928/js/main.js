import { setupUI } from "./ui.js";
import { setSeed, rand } from "./random.js";
import { applyRGB } from "./effects/rgb.js";

let canvas;
let ctx;

let originalImage = null;

window.addEventListener("DOMContentLoaded", () => {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    setupUI({
        onGenerate,
        onReset,
        onImageLoad,
        onSavePNG,
        onSaveJPEG
    });

});

function onImageLoad(img){

    originalImage = img;

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img,0,0);
}

function onReset(){

    if(!originalImage) return;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.drawImage(
        originalImage,
        0,
        0
    );
}

function onGenerate(){

    if(!originalImage) return;

    onReset();

    const seed =
        document.getElementById("seed")
        .value;

    setSeed(seed);

    const rgbSettings = {

        count:
        Number(
            document.getElementById("rgbCount")
            .value
        ),

        minSize:
        Number(
            document.getElementById("rgbMinSize")
            .value
        ),

        maxSize:
        Number(
            document.getElementById("rgbMaxSize")
            .value
        ),

        minStrength:
        Number(
            document.getElementById("rgbMinStrength")
            .value
        ),

        maxStrength:
        Number(
            document.getElementById("rgbMaxStrength")
            .value
        )
    };

    applyRGB(
        ctx,
        canvas,
        rgbSettings
    );
}

function onSavePNG(){

    const a =
        document.createElement("a");

    a.href =
        canvas.toDataURL(
            "image/png"
        );

    a.download =
        "glitch.png";

    a.click();
}

function onSaveJPEG(){

    const a =
        document.createElement("a");

    a.href =
        canvas.toDataURL(
            "image/jpeg",
            0.95
        );

    a.download =
        "glitch.jpg";

    a.click();
}
