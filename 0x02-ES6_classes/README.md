 [classroom](0-classrooms.js)
* Implement a class named ClassRoom:

Prototype: export default class ClassRoom
It should accept one attribute named maxStudentsSize (Number) and assigned to `_maxStudentsSize`

[make classrooms](1-make_classrooms.js)
* Import the ClassRoom class from 0-classroom.js.

Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).


 [hbtn course](2-hbtncourse.js)
* Implement a class named HolbertonCourse:

Constructor attributes:
name (String)
length (Number)
students (array of Strings)
Make sure to verify the type of attributes during object creation
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
Implement a getter and setter for each attribute.

Implement a class named HolbertonCourse:

. Constructor attributes:
1. `name` (String)
2. `length` (Number)
3. `students` (array of Strings)
. Make sure to verify the type of attributes during object creation
. Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
. Implement a getter and setter for each attribute.

 [currency](3-currency.js)
* Implement a class named Currency:

.  Constructor attributes:
 1. `code` (String)
 2. `name` (String)
. Each attribute must be stored in an `underscore` attribute version (ex: name is stored in `_name`)
. Implement a getter and setter for each attribute.
. Implement a method named `displayFullCurrency` that will return the attributes in the following format name (code).

[pricing](4-pricing.js)

* Import the class Currency from 3-currency.js

Implement a class named Pricing:

. Constructor attributes:
1. amount (Number)
2. currency (Currency)
. Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
. Implement a getter and setter for each attribute.
. Implement a method named displayFullPrice that returns the attributes in the following format amount `currency_name` (`currency_code`).
Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.

 [building](5-building)

* Implement a class named Building:

Constructor attributes:
sqft (Number)
Each attribute must be stored in an `underscore` attribute version (ex: name is stored in `_name`)
Implement a getter for each attribute.
Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage.`
If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

[sky high](6-sky_high.js)
* Import Building from 5-building.js.

Implement a class named SkyHighBuilding that extends from Building:

Constructor attributes:
sqft (Number) (must be assigned to the parent class Building)
floors (Number)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
Implement a getter for each attribute.
Override the method named evacuationWarningMessage and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`

[airport](7-airport.js)

* Implement a class named Airport:

Constructor attributes:
name (String)
code (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
The default string description of the class should return the airport code (example below).

 [hbtn class](8-hbtn_class.js)

* Implement a class named HolbertonClass:

Constructor attributes:
size (Number)
location (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in `_name`)
When the class is cast into a Number, it should return the size.
When the class is cast into a String, it should return the location.

[ev car](100-evcar.js]

Import Car from 10-car.js.

Implement a class named EVCar that extends the Car class:

Constructor attributes:
1. brand (String)
2. motor (String)
3. color (String)
4. range (String)
. Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
. For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.


 [hoisting](9-hoisting.js)

* Fix this code and make it work
```
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];

```


[car](10-car.js)

 > Implement a class named Car:
```
Constructor attributes:
brand (String)
motor (String)
color (String)
Each attribute must be stored in an `underscore` attribute version (ex: name is stored in `_name`)
Add a method named cloneCar. This method should return a new object of the class.
```
