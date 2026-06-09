console.log("random loaded");

let rng = Math.random;

export function setSeed(seed){

    Math.seedrandom(seed);

    rng = Math.random;
}

export function rand(min,max){

    return (
        rng() *
        (max-min)
    ) + min;
}

export function randInt(min,max){

    return Math.floor(
        rand(min,max)
    );
}

console.log({
    setSeed,
    rand,
    randInt
});
