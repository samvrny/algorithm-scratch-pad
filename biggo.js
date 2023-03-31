//NOTE: This JS file will have many functions that will require the user or tester to change code/uncomment function calls and pass different things into them in order to get the functions to work. This probably seems tedious and strange because it is, but this file was not made to be outstanding or deployable, it was made for learning, and really only to be understood by the learner, and that would be me (Sam)

//TODO: @@@ GLOBAL VARIABLES @@@
//finding letters/ Give the computer a basic instruction with a simple array
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',];
//this is to demonstrate for slow something will be the larger an array
const largeArray = new Array(10000).fill('letters');
const hugeArray = new Array(100000).fill('dory')

//TODO: $$$ END GLOBAL VARIABLES $$$
//TODO: PRESS ALT-J to condense comment lines before preceding

//This array has a Big O notation of O(n). Linear time. For each element, there is a new operation the computer does. This means the Big O depends on the number of (n) (1000 item array = O(1000)) Probably the most common you will find is O(n)
function O_of_n(array) { //call is on line 28
    let runtime0 = performance.now();

    for(i=0; i < array.length; i++) {
        if(array[i] === 'letters') {
            console.log('found letters!');
            break;
        };
    };

    let runtime1 = performance.now();

    console.log('Call to find letters took ' + (runtime0 - runtime1) + ' milliseconds')
}

//pass an array into this funtion and run it
// O_of_n(largeArray);

//this function is for O(1), Constant time. Always just grabbing the first item in an array. The computer always just performs 1 calculation. There are 2 console logs in this function, so 2 operations, so the Big O of this function will be O(2). This always just gets rounded down to O(1). 
function O_of_1(array) { //call is on line 37
    console.log(array[0]); //O(1)
    console.log(array[1]); //O(1)
}

//pass an array into this funtion and and run it
O_of_1(letters);

//EXAMPLE ARRAY BELOW TO DEMONSTRATE A O(n) FUNCTION: Each part of the function are labeled as too which parts conform to which big O properties; The whole funtion in an of itself is O(3 + 4n) because there are 3 components that are O(1) after adding them together, and 4 that are O(n). This, however, can just be simplified to be O(n)

function example(input) {
    let a = 10; //O(1)
    a = 50 + 25; //O(1)

    for(let i=0; i < input.length; i++) { //O(n)
        anotherFunction(); //O(n)
        let stranger = true; //O(n)
        a++; //O(n)
    }
    return a; //O(1)
}

//ANOTHER EXAMPLE. The solution is O(4 + 7n). This can be condensed down to O(n), once again. 

function anotherExample(input) {
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)

    for(let i=0; i < input.length; i++) { //O(n)
        let d = 5; //O(n)
        let e = 5; //O(n)
        let f = 5; //O(n)
    }

    for(let j=0; j < input; j++) { //O(n)
        let p = j * 2; //O(n)
        let q = j* 2; //O(n)
    }

    let whoAmI = 'A software developer' //O(1)
}

//an example of rule 3 in the big O, 'Different terms for different inputs' The solution for this function is O(a + b) because it has two inputs, and therefore has two different instances of O(n)

function ruleThree(input, input2) {

    input.forEach(function(input) { //first instance of O(n)with the first argument (input)
        console.log(input)
    })

    input2.forEach(function(input) { //second instance with the second argument
        console.log(input)
    })
}