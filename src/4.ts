// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково
// при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature,
// який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх
// у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true),
// або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn,
// який додає об'єкт класу Person у масив tenants, якщо door відкрита.
// Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House.
// Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем,
// збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій,
// в якому людина приходить додому.

// Наприклад, ось так:
class Key {
  private signature: Number = Math.floor(Math.random() * 1000);

  getSignature(): Number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  private tenants: Array<Person> = [];
  constructor(protected key: Key) {}
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Honey I'm Home");
    } else {
      console.log("Door is closed");
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("Key is valid. Door is opened");
    } else {
      console.log("Sorry. Key is invalid");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

// 1. Getter & Setter в TS. На курсах по JS нас учили, что геттер и сеттер всегда идут в паре. И что линтеры обычно ругаются если пары нет. В примере из конспекта по TS они используются по одиночке. В тайпскрпите это допустимо?
// 2. В чем отличия интерфейса от абстрактного класса я гуглил, но не понятно когда и что использовать на практике
// class Car {
//   driver: Driver | null = null;
//   setDriver(driver: Driver) {
//     this.driver = driver;
//   }
//   startJourney() {
//     if (this.driver) {
//       this.driver.drive();
//     }
//   }
// }
// class Driver {
//   drive() {
//     console.log("Driving...");
//   }
// }
// const driver = new Driver();
// const car = new Car();
// car.setDriver(driver);
// car.startJourney();

// 3. Когда на практике следует использовать type, а когда interface? Или просто придерживаться одной "стилистики" и этого достаточно?
// Спасибо!!!
