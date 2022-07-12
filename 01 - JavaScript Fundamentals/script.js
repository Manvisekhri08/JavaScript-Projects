// const mMass = 78;
// const jMass = 92;
// const mHeight = 1.69;
// const jHeight = 1.95;
// mBMI = mMass / (mHeight * mHeight);
// jBMI = jMass / (jHeight * jHeight);
// console.log(mBMI);
// console.log(jBMI);
// //const markHigherBMI;
// if (mBMI > jBMI) {
//     console.log('Mark');
// } else {
//     console.log('john');
// }
// //console.log(markHigherBMI);

// const name = 'manvi';
// const string1 = `I'm ${name}`;
// console.log(string1);

// console.log(`Hi
//         Hey 
//         Hola `);

// const age = 15;
// if (age >= 18) {
//     console.log(`Yes 🚕`);
// } else {
//     const howMuch = 18 - age;
//     console.log(`She has to for ${howMuch} years`);
// }

// let n = '1' + 1; // string + int
// n -= 1;
// console.log(n); // ans  = 11   // 2+3+4+"5" == "95"

// // string - string = number
// // string + number = string
// // eg = '10' - '4' - '3' -2 + '5' = 10-4 = 6 -3 =3 -2 = 1 +'5' = 15

// // falsy values are not exactly false but it becomes false when we convert into boolena
// // 5 falsy values :- 0, "", null, undefined, NaN

// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log(Boolean(2));
// console.log(Boolean(`Hiii`));
// console.log(Boolean({})); //empty object

// const money = 0;
// if (money) {
//     console.log("Dont spent it");
// } else {
//     console.log("spent it");
// }


// const age1 = 18;
// if (age === 18) { //strict equality operator doesnot perform type coercion
//     console.log("hii"); //true
// }

// if ('18' == 18) { // loose equality operator , performs type coercion
//     console.log("hola"); //true
// }

// if ('18' === 18) {
//     console.log("gracias "); //false
// }

// const fav = prompt("Whats your fav color?");
// console.log(fav);
// console.log(typeof fav);

// if (fav == 23) { //'23' is a string so thats why we used '==' '23' == 23
//     console.log("cool!")
// }

// const check = Number(prompt("Whats your fav number?"));
// console.log(typeof check);

// if (check === 23) { //now check is a number
//     console.log("coolllllllll 🌻!");
// }

//functions
// const calcAverage = (a, b, c) => (a + b + c)/3;

// const dolpscore = calcAverage(85,54,41);
// const koascore = calcAverage(23,34,27);
// console.log(dolpscore, koascore);
// const  checkWinner = function (dolpscore, koascore) {
//     if(dolpscore >= 2 * koascore) {
//         console.log("dolphin wins");
//     } else {
//         console.log("koalas win");
//     }
// }
// checkWinner(dolpscore, koascore);

//arrays

// const calctip = billvalue => 
//     billvalue >= 50 && billvalue <= 300 ? billvalue*0.15 : billvalue*0.2;

// const bills = [125,555,44];
// const tips = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])]
// console.log(bills, tips);

// RETRIEVE DATA IN OBJECTS AND CHANGE DATA IN OBJECTS USING DOT AND BRACKET ANNOTATIONS

// const jonas = {
//     firstName: 'David',
//     lastName: 'Schitt',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Peter','Alexis','Mary']
// }
// console.log(jonas);
// console.log(jonas.friends[2]);
// console.log(jonas.lastName); // dot annotation
// console.log(jonas['lastName']); //bracket annotation // we can put any expression that we like. don't have to write string explicitly 

// // variable store which have repeating part

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);  // js will the [] expression and it will become 'firstName' and then it will see jonas with firstName property
// console.log(jonas['last' + nameKey]);

// // When we need to compute the property name we use bracket annotation

// // const interestedIn = prompt("what do you want to know about David? choose between firstName, lastname, job, age, friends.");

// // if(jonas[interestedIn]) {
// // console.log(jonas[interestedIn]);
// // } else {
// //     console.log("Oops. Wrong request!");
// // }

// // ADD NEW PROPERTIES TO THE OBJECT
// jonas.location = 'Paris';
// jonas['twitter'] = '@davidschitt'

// console.log(jonas);

// //Challenge:- dynamic 'Jonas has 3 friends. But his best friend is michael'

// console.log(jonas.firstName + ' has '+ jonas.friends.length + ' friends. But his best friend is ' +  jonas.friends[1]); //or
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends. But his best friend is ${jonas.friends[1]}`);

//Object Methods

// const jonas = {
//     firstName: 'David',
//     lastName: 'Schitt',
//     birthyear : 1991,
//     job: 'Teacher',
//     friends: ['Peter','Alexis','Mary'],
//     hasDriverLicense: true,

    // calcAge: function(birthyear) {
    //     console.log(this);
    //     return 2037 - this.birthyear;
    // },
    // shit: {
    //     x: 'asdasdasd',
    //     fuckFunction: function (){return (`fuck ${this.x}`)}
    // }
    // calcAge: function() {
    //     this.age = 2037 - this.birthyear;
    //     return this.age;
    // },
    //Challenge
    // getSummary: function() {
    //     return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    // }
// }
// jonas.calcAge();
// console.log(jonas.getSummary());
// console.log(jonas.age);
//console.log(jonas.shit.fuckFunction());
//console.log(jonas['calcAge'](1991));

//CHALLENGE
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.bmi = this.mass/this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//         this.bmi = this.mass/this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI()
// john.calcBMI()

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi} is higher than ${john.firstName} ${john.lastName}'s BMI ${john.bmi}.`);
// } else {
//     console.log(`${john.firstName} ${john.lastName}'s BMI ${john.bmi} is higher than ${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi}.`);
// }

//ITERATION

// const david = [
//     'David',
//     'Rose',
//     2037-1991,
//     'enterprenuer',
//     ['Peter', 'Alexis', 'Stevie'],
//     true
// ];

// const types = [];
// for(let i = 0; i < david.length; i++) {
//     console.log(david[i], typeof david[i]);

//     // filling types array
//     // types [i] = typeof david[i]
//     types.push(typeof david[i]);
// }
// console.log(types)

// const years = [1991, 2001, 2011, 2021];
// const ages = [];

// for(let i =0; i < years.length; i++) {
//     ages.push(2037-years[i]);
// }
// console.log(ages);

// // CONTINUE AND BREAK
// // CONTINUE :-  TO EXIST CURRENT ITERATION OF LOOP AND IMMEDIATELY CONTINUE TO NEXT ONE.
// // BREAK:- USED TO COMPLETELY TERMINATE THE WHOLE LOOP

// //CONTINUE
// console.log('---ONLY STRINGS---');
// for(let i = 0; i < david.length; i++) {
//     if(typeof david[i] != 'string') continue;
//     console.log(david[i], typeof david[i]);
// }

// //BREAK
// console.log('---BREAK WITH NUMBER---');
// for(let i = 0; i < david.length; i++) {
//     if(typeof david[i] === 'number') break;
//     console.log(david[i], typeof david[i]);
// }

// LOOPING BACKWARDS
// const david = [
//     'David',
//     'Rose',
//     2037-1991,
//     'enterprenuer',
//     ['Peter', 'Alexis', 'Stevie'],
//     true
// ];

// for(let i = david.length - 1 ; i >= 0; i--) {
//     console.log(david[i]);
// }

// WHILE LOOP
// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) {
//         console.log("Loop is about to end...")
//     }
// }

// Challenge
// const calctip = function (billvalue) {
//     return billvalue >= 50 && billvalue <= 300 ? billvalue * 0.15 : billvalue * 0.2; 
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for(let i=0; i < bills.length; i++) {
//     const tip = calctip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function(arr) {
//     let sum = 0;
//     for(let i=0; i < arr.length; i++) {
//         sum+= arr[i];
//     }
//     return sum/arr.length
// }
// console.log(calcAverage([2, 6, 8]))
// console.log(calcAverage(totals))

// Concat

// const calcTemp = function(t1, t2) {
//     const temps = t1.concat(t2);
//     let max = temps[0];
//     let min = temps[0];
//     for(let i=0; i < temps.length; i++) {
//         const curr = temps[i];
//         if(typeof curr!== 'number') continue;
//         if(curr > max) max = curr;
//         if(curr < min) min = curr;
//     }
//     console.log(max, min)
//     return max - min;
// }

// const amplitude = calcTemp([1,6,4], [3,6,9]);
// console.log(amplitude)

const printForecast = function(arr) {
    let str = '';
    for(let i=0; i < arr.length; i++) {
        str +=`${arr[i]}°C in ${(i+1)} days ...`;
    }
    console.log('...' + str)
}
printForecast([17,21,23])