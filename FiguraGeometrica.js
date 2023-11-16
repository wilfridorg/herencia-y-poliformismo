class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }

    darArea() {
        return 0;
    }

    darPerimetro() {
        return 0;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(nombre, radio) {
        super(nombre);
        this.radio = radio;
    }

    darArea() {
        return Math.PI * this.radio * this.radio;
    }

    darPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(lados) {
        super();
        this.lados = lados;
    }

    darArea() {
        return this.lados * this.lados;
    }

    darPerimetro() {
        return this.lados * 4;
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    darArea() {
        return this.base * this.altura;
    }

    darPerimetro() {
        return 2 * (this.base + this.altura);
    }
}

const circulo = new Circulo("Círculo", 6);
const cuadrado = new Cuadrado(4);
const rectangulo = new Rectangulo(3, 5);

console.log("Área del círculo:", circulo.darArea());
console.log("Perímetro del círculo:", circulo.darPerimetro());

console.log("Área del cuadrado:", cuadrado.darArea());
console.log("Perímetro del cuadrado:", cuadrado.darPerimetro());

console.log("Área del rectángulo:", rectangulo.darArea());
console.log("Perímetro del rectángulo:", rectangulo.darPerimetro());
