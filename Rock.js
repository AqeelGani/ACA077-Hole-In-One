class Rock extends BaseClass {
    constructor(x, y) {
        super(x, y, 100, 100);
        this.image = loadImage('sprites/rocks.png');
    }
}