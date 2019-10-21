
/**
 * nQuery, *the* JS Framework
 */
var $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

/**
 * Canvas object
 */
let Canvas = {
    init(canvasId, color) {
        this.canvas = $(canvasId);
        this.context = this.canvas.getContext("2d");
        this.color = color;
        this.prep();
    },
    prep() {
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    getContext() {
        return this.context;
    },
    getHeight() {
        return this.canvas.height;
    },
    getWidth () {
        return this.canvas.width;
    }
};

/**
 * Umo object, version 0.9
 */
let Umo = {
    init(canvas, color) {
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.getWidth();
        this.y = Math.random() * this.canvas.getHeight();
        this.r = Math.random() * 9 + 3;
        this.dx = Math.random() * 5;
        this.dy = Math.random() * 5;
        this.color = color;
    },

    draw() {
        this.canvas.getContext().beginPath();
        this.canvas.getContext().fillStyle = this.color;
        this.canvas.getContext().arc(this.x, this.y, this.r,
                                     0, Math.PI * 2,
                                     false);
        this.canvas.getContext().fill();
        this.canvas.getContext().closePath();
    },

    move() {
        if (this.x + this.dx > this.canvas.getWidth()
                || this.x + this.dx < 0)
              this.dx = -this.dx;
        if (this.y + this.dy > this.canvas.getHeight()
                || this.y + this.dy < 0)
              this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
    },

    toString() {
        s = '';
        s += this.x + ':' + this.y + ', ' + this.r + " \n " + this.color;
        console.log(s);
    }
};
