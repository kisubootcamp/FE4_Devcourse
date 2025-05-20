{
    const car1 = {
        name: "bmw",
        speed: 100,
        maxSpeed() {
            return `Max Speed: ${this.speed * 2}`;
        },
    };

    console.log(car1.maxSpeed());
}
