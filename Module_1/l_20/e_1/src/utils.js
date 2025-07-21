export function getRandomColor() {
    const range = "ABCDF12334567890";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += range[getRandomNumber(0, range.length - 1)];
    }
    return color;
}

export function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}