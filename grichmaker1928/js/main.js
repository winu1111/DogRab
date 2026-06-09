console.log("main loaded");

import { setupUI } from "./ui.js";
import { setSeed, rand } from "./random.js";

import { applyRGB } from "./effects/rgb.js";
import { applySlice } from "./effects/slice.js";
import { applyBlock } from "./effects/block.js";
import { applyNoise } from "./effects/noise.js";
import { applyInvert } from "./effects/invert.js";
import { applyWave } from "./effects/wave.js";

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

    console.log("loaded");

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

    console.log("generate");

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

    const sliceSettings = {
        count: Number(document.getElementById("sliceCount").value),
        minSize: Number(document.getElementById("sliceMinSize").value),
        maxSize: Number(document.getElementById("sliceMaxSize").value),
        minStrength: Number(document.getElementById("sliceMinStrength").value),
        maxStrength: Number(document.getElementById("sliceMaxStrength").value)
    };

    const blockSettings = {
        count: Number(document.getElementById("blockCount").value),
        minSize: Number(document.getElementById("blockMinSize").value),
        maxSize: Number(document.getElementById("blockMaxSize").value),
        strength: Number(document.getElementById("blockStrength").value),
    };

    const noiseSettings = {
        count: Number(document.getElementById("noiseCount").value),
        strength: Number(document.getElementById("noiseStrength").value)
    };

    console.log(rgbSettings);

applySlice(
    ctx,
    canvas,
    sliceSettings
);

applyBlock(
    ctx,
    canvas,
    blockSettings
);

applyRGB(
    ctx,
    canvas,
    rgbSettings
);

applyNoise(
    ctx,
    canvas,
    noiseSettings
);

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
