function circleArea(radius) {
    let r = radius
    let pi = 3.14

    A = r * r * pi

    return A
}


// const pi = 3.14;
let radius = 3;
// let area = 0;
// area = radius * radius * pi;
// radius = 4;
// area = radius * radius * pi;

let area = circleArea(3)
console.log("Area 1: " , area)

let area2 = circleArea(4)
console.log("Area 2: " , area2)