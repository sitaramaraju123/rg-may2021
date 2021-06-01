class Person {
  constructor() {
    this._name = "";
    this._age = 0;
  }

  get age() {
    return this._age;
  }

  set age(v) {
    this._age = v;
  }

  get name() {
    return this._name;
  }

  set name(v) {
    this._name = v;
  }

  print() {
    console.log(this.name + " is " + this._age + " years old.");
  }
}

Person.prototype.get = () => {};
Person.prototype.set = (s) => {};

// Student <- Person <-   <- null
class Student extends Person {
  constructor(name, age, id) {
    super(name);

    this.age = age;

    this.id = id;
  }

  print() {
    console.log(
      "The student " +
        this.name +
        " is " +
        this._age +
        " years old and his/her id is " +
        this.id +
        "."
    );
  }
}

//
const will = new Student("Will", 45, 1);
will.age;
will.name;
console.log(
  " =-----> ",
  Object.getPrototypeOf(
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(will)))
  )
);
will.print();

// prototype
