class GolfBall extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.image = loadImage("sprites/golf-ball.png");
    };
    display() {
        var pos = this.body.position;
        super.display();
    };
};
