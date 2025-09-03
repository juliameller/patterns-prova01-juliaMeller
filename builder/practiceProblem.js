class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = false;
  }

  showDetails() {
    console.log(`
      Carro:
      Ano: ${this.year} 
      Marca: ${this.brand} 
      Modelo: ${this.model} 
      Motor: ${this.engine}, 
      Cor: ${this.color}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setGps(gps) {
    this.car.gps = gps;
    return this;
  }

  build() {
    return this.car;
  }
}

class CarDirector {
  static buildWorkCar() {
    return new CarBuilder()
    .setBrand("Fiat")
    .setModel("Uno")
    .setYear(2010)
    .setEngine("1.0")
    .setColor("Branco")
    .setGps(true)
    .build();
  }

  static buildFamilyCar() {
    return new CarBuilder()
    .setBrand("Honda")
    .setModel("Civic")
    .setYear(2023)
    .setEngine("1.5 Turbo")
    .setColor("Prata")
    .setGps(false)
    .build();
  }
}

const workCar = CarDirector.buildWorkCar();
const familyCar = CarDirector.buildFamilyCar();
const sportCar = new CarBuilder().setBrand("Ferrari").build();

workCar.showDetails();
familyCar.showDetails();
sportCar.showDetails();