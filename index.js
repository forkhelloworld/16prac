const user = {
  name: "Test",
  surname: "Testovitch",
  email: "test@test",
  password: "12345678",
  phoneNumber: "+123123123",
  address: {
    street: "Бейкер-стріт",
    house: "221b",
  },
};

function userGreeting(user) {
  console.log(`Доброго дня, ${user.name} ${user.surname}`);
}

function getObjectProperties(user) {
  for (key in user) {
    console.log(key);
  }
}

const car = {
  color: "red",
  model: "911",
  brand: "Porsche",
  engineCapacity: 3.8,
  passengerCapacity: 2,
  currentSpeed: 0,
  maxSpeed: 330,
};

function Car(color, model, brand, engineCapacity, passengerCapacity, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.engineCapacity = engineCapacity;
  this.passengerCapacity = passengerCapacity;
  this.currentSpeed = 0;
  this.maxSpeed = maxSpeed;

  this.accelerate = function(speed) {
    if (this.currentSpeed + speed > this.maxSpeed) {
      this.currentSpeed = this.maxSpeed;
    } else {
      this.currentSpeed += speed;
    }
  }
  this.deaccelerate = function(speed) {
    if (this.currentSpeed - speed <= 0) {
      this.currentSpeed = 0;
    } else {
      this.currentSpeed -= speed;
    }
  }
  this.stop = function() {
    this.currentSpeed = 0;
  }
}

const car2 = new Car("red", "911", "Porsche", "3.8", "2", "330");
console.log(car2);

const car3 = new Car("blue", "P1", "McLaren", "3.5", "2", "300");
console.log(car3);
