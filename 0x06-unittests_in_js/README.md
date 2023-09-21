# 0x06 Unittests in JS
![picture](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/90f79a666e174e6c4ffc.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230921%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230921T110129Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=581bc5889cef0b0b3dace2ab623b99c68f8d79f91a1e109eea72b3c56adc13f7)

---
### Resources

**Read or watch**:
1. [Mocha documentation](https://intranet.alxswe.com/rltoken/Gx5mfX41__cc2hwepcl0aA)
2. [Chai](https://intranet.alxswe.com/rltoken/Rs3SrSdr9OxPp-4099A0cg)
3. [Sinon](https://intranet.alxswe.com/rltoken/5KsW5N9sG3sGWW3z-jkNwA)
4. [Express](https://intranet.alxswe.com/rltoken/Jq58SNUh8jcZqKoFcuOQdw)
5. [Request](https://intranet.alxswe.com/rltoken/FcJfzr2jUJSj8Xp3z9L1wg)
6. [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://intranet.alxswe.com/rltoken/HwB8gViDosy8znk7H9i4Pw)

---
### Requirements

* A ```README.md``` file.
* Your code should use the ```js``` extension.
* When running every test with npm run *.test.js, all the tests should pass

---
### Tasks
#### 0. Basic test with Mocha and Node assertion library
[calcul](./0-calcul.js)
[calcul test](./0-calcul.test.js)

1. install Mocha using ```npm install --save-dev mocha```
2. Create a new file named ```0-calcul.js```:
    - Create a function ```calculateNumber``` that takes a type, ```a```, and ```b``` and returns the sum of ```a``` and ```b``` rounded.
    - Type can be one of the following:
        - SUM
        - SUBTRACT
        - DIVIDE
    - ```a``` and ```b``` can be any integer or float.
    - You can use ```assert``` to check your code.
3. Test cases
- Create a file 0-calcul.test.js that contains test cases of this function
- You can assume a and b are always number
- Tests should be around the “rounded” part
4. Tips:
- For the sake of the example, this test suite is slightly extreme and probably not needed
- However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

#### 1. Combining descriptions
[Calcul ](./1-calcul.js)
[Test Calcul](./1-calcul.test.js)
> Create a new file named 1-calcul.js:

Upgrade the function you created in the previous task (0-calcul.js)
Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
When type is SUM, round the two numbers, and add a and b
When type is SUBTRACT, round the two numbers, and subtract b from a
When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error
Test cases

Create a file 1-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Usage of describe will help you to organize your test cases
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases


#### 2. Basic test using Chai assertion library
[Calcul with chai](./2-calcul_chai.js)
[Test Calcul with chai](./2-calcul_chai.test.js)
```sh
$ npm install --save-dev mocha chai
```

> While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

Let’s install Chai with npm:

Copy the file 1-calcul.js in a new file 2-calcul_chai.js (same content, same behavior)
Copy the file 1-calcul.test.js in a new file 2-calcul_chai.test.js
Rewrite the test suite, using expect from Chai
Tips:

Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you
The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code


#### 3. Spies
[Payment](./3-payment.js)
[Test payment](./3-payment.test.js)
```sh
$ npm install --save-dev mocha chai sinon
```
> Let’s install Sinon with npm:

Create a new file named utils.js
Create a new module named Utils
Create a property named calculateNumber and paste your previous code in the function
Export the Utils module
Create a new file named 3-payment.js:

Create a new function named sendPaymentRequestToApi. The function takes two argument totalAmount, and totalShipping
The function calls the Utils.calculateNumber function with type SUM, totalAmount as a, totalShipping as b and display in the console the message The total is: <result of the sum>
Create a new file named 3-payment.test.js and add a new suite named sendPaymentRequestToApi:

By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber('SUM', 100, 20) (validate the usage of the Utils function)


#### 4. Stubs
[Payment](./4-payment.js)
[Test payment](./4-payment.test.js)

> Create a new file 4-payment.js, and copy the code from 3-payment.js (same content, same behavior)

Create a new file 4-payment.test.js, and copy the code from 3-payment.test.js

Imagine that calling the function Utils.calculateNumber is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run
Stub the function Utils.calculateNumber to always return the same number 10
Verify that the stub is being called with type = SUM, a = 100, and b = 20
Add a spy to verify that console.log is logging the correct message The total is: 10


#### 5. Hooks
[Payment](./5-payment.js)
[Test payment](./5-payment.test.js)

> Copy the code from 4-payment.js into a new file 5-payment.js: (same content/same behavior)

Create a new file 5-payment.test.js:

Inside the same describe, create 2 tests:
The first test will call sendPaymentRequestToAPI with 100, and 20:
Verify that the console is logging the string The total is: 120
Verify that the console is only called once
The second test will call sendPaymentRequestToAPI with 10, and 10:
Verify that the console is logging the string The total is: 20
Verify that the console is only called once


#### 6. Async tests with done
[Payment](./6-payment.js)
[Test payment](./6-payment.test.js)

> Create a new file 6-payment_token.js:

Create a new function named getPaymentTokenFromAPI
The function will take an argument called success (boolean)
When success is true, it should return a resolved promise with the object {data: 'Successful response from the API' }
Otherwise, the function is doing nothing.
Create a new file 6-payment_token.test.js and write a test suite named getPaymentTokenFromAPI

How to test the result of getPaymentTokenFromAPI(true)?
Tips:

You should be extremely careful when working with async testing. Without calling done properly, your test could be always passing even if what you are actually testing is never executed


#### 7. Skip
[Skip test](./7-skip.test.js)
> Create a new file 7-skip.test.js:
```js
const { expect } = require('chai');

describe('Testing numbers', () => {
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  it('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
}); 

```
> Using the file 7-skip.test.js:

Make the test suite pass without fixing or removing the failing test
it description must stay the same
Tips:

Skipping is also very helpful when you only want to execute the test in a particular case (specific environment, or when an API is not behaving correctly)


#### 8. Basic Integration testing
[load api file](./8-api/api.js)
[load index file](./8-api/routes/index.js)
[load index test file](./8-api/routes/index.test.js)
> Create a new file 8-api/package.json
```json
{
  "name": "8-api",
  "version": "1.0.0",
  "description": "",
  "main": "api.js",
  "scripts": {
    "start": "node api.js",
    "test": "mocha --timeout 5000 --exit"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0"
  }
}
```

```sh
$ npm install --save-dev mocha chai request
```
> Create a new file api.js:

By using express, create an instance of express called app
Listen to port 7865 and log API available on localhost port 7865 to the browser console when the express server is started
For the route GET /, return the message Welcome to the payment system
Create a new file api.test.js:

Create one suite for the index page:
Correct status code?
Correct result?
Other?

Tips:

Since this is an integration test, you will need to have your node server running for the test to pass
You can use the module request


#### 9. Regex integration testing
[load api file](./9-api/api.js)
[load index file](./9-api/routes/index.js)
[load index test file](./9-api/routes/index.test.js)
```sh
$ npm install --save-dev mocha chai request
```

> In a folder 9-api, reusing the previous project in 8-api (package.json, api.js and api.test.js)

Modify the file api.js:

Add a new endpoint: GET /cart/:id
:id must be only a number (validation must be in the route definition)
When access, the endpoint should return Payment methods for cart :id
Modify the file api.test.js:

Add a new test suite for the cart page:
Correct status code when :id is a number?
Correct status code when :id is NOT a number (=> 404)?
etc.

Tips:

You will need to add a small regex in your path to support the usecase


#### 10. Deep integration testing
[load api file](./10-api/api.js)
[load index file](./10-api/routes/index.js)
[load index test file](./10-api/routes/index.test.js)
```sh
$ npm install --save-dev mocha chai request
```
. Add an endpoint GET /available_payments that returns an object with the following structure:
> Modify the file api.js
```js
{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
```
> Add an endpoint POST /login that returns the message Welcome :username where :username is the value of the body variable userName.
Modify the file api.test.js:

Add a test suite for the /login endpoint
Add a test suite for the /available_payments endpoint
Tips: Look at deep equality to compare objects

~~Breath 😁~~
