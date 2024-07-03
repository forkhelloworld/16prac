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
  accelerate(speed) {
    if (this.currentSpeed + speed > this.maxSpeed) {
      this.currentSpeed = this.maxSpeed;
    } else {
      this.currentSpeed += speed;
    }
  },
  deaccelerate(speed) {
    if (this.currentSpeed - speed <= 0) {
      this.currentSpeed = 0;
    } else {
      this.currentSpeed -= speed;
    }
  },
  stop() {
    this.currentSpeed = 0;
  },
};

function Objects(object) {
  for (key in object) {
    this[key] = object[key];
  }
}

const user2 = new Objects(user);
console.log(user2);

const car2 = new Objects(car);
console.log(car2);
