import iShape from 'iShape';

export default class Circle implements iShape {
    public x: number = 0;
    public y: number = 0;
    public radius: number = 10;
    public lineWidth: number = 2;
    public color: string = "red";

    private context: CanvasRenderingContext2D;

    constructor(x: number, y: number, radius: number, context: CanvasRenderingContext2D, color: string = "red", line_width: number = 2) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
        this.context = context;
    }

    public draw = (): void => {
        this.context.save();
        this.context.beginPath();
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.lineWidth;
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.color = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        this.context.stroke();
        this.context.restore();
    }

    public moveUp = (): void => {
        this.y = this.y - 10;
    }

    public moveDown = (): void => {
        this.y = this.y + 10;
    }

    public moveLeft = (): void => {
        this.x = this.x - 10;
    }

    public moveRight = (): void => {
        this.x = this.x + 10;
    }
}