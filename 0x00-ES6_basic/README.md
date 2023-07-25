## Welcome to Alx back-end specialisation

### ES6 Basics

Prerequise
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

## Task
 [0 Const or let](0-constants.js)
**Modify**
. function taskFirst to instantiate variables using const
. function taskNext to instantiate variables using let 

[1. Block Scope](block-scoped.js)
*Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.*

[2. Arrow functions](2-arrow.js)

* Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

[3. parameter defaults](3-default-parameter.js)

* Condense the internals of the following function to 1 line - without changing the name of each function/variable.

* Hint: The key here to define default parameter values for the function parameters.

[4. Rest parameter syntax for functions](4-rest-parameter.js)

* Modify the following function to return the number of arguments passed to it using the rest parameter syntax

[5. The wonders of spread syntax](5-spread-operator.js)

* Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

[6. Take advantage of template literals](6-string-interpolation.js)

* Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

[7. Object property value shorthand syntax](7-getBudgetgetObject.js)

* Modify the following function’s budget object to simply use the keyname instead. 

[8. No need to create empty objects before adding in properties](8-getBudgetCurrentYear.js)

* Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

[9. ES6 method properties](9-getFullBudget.js)

* Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object

[10. For...of Loops](10-loops.js)

* Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

[11. Iterator](11-createEmployeesObject.js)

* Write a function named createEmployeesObject that will receive two arguments:
. departmentName (String)
. employees (Array of Strings)

[12. Let's create a report object](12-createReportObject.js)

* Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.

1. createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.
2. allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

[13. Iterating through report objects](100-createIteratorObject.js)

* Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.

[14. Iterate through object](101-iterateThroughObject.js)

* Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.
