class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        const a = p1.x - p2.x;
        const b = p1.y - p2.y;
        const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        return c;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2)); 