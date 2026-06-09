export function setupUI(callbacks){

    const imageInput =
        document.getElementById(
            "imageInput"
        );

    imageInput.addEventListener(
        "change",
        e => {

            const file =
                e.target.files[0];

            if(!file) return;

            const img =
                new Image();

            img.onload = () =>
                callbacks.onImageLoad(
                    img
                );

            img.src =
                URL.createObjectURL(
                    file
                );
        }
    );

    document
        .getElementById(
            "generateBtn"
        )
        .addEventListener(
            "click",
            callbacks.onGenerate
        );

    document
        .getElementById(
            "resetBtn"
        )
        .addEventListener(
            "click",
            callbacks.onReset
        );

    document
        .getElementById(
            "savePNG"
        )
        .addEventListener(
            "click",
            callbacks.onSavePNG
        );

    document
        .getElementById(
            "saveJPEG"
        )
        .addEventListener(
            "click",
            callbacks.onSaveJPEG
        );
}
