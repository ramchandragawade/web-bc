class Color {
    constructor (r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
    }

    innerRGB(){
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    hex () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgb () {
        const { r, g, b } = this;
        return `rgb(${this.innerRGB()})`;
    }
    rgba (a = 1) {
        const { r, g, b } = this;
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

const c1 = new Color(255, 67, 89, 'tomato');
const c2 = new Color(255, 255, 255, 'white');