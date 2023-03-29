//NOTE: This JS file will have many functions that will require the user or tester to change code/uncomment function calls and pass different things into them in order to get the functions to work. This probably seems tedious and strange because it is, but this file was not made to be outstanding or deployable, it was made for learning, and really only to be understood by the learner, and that would be me (Sam)

// TODO: @@@ GLOBAL VARIABLES @@@
//finding letters/ Give the computer a basic instruction with a simple array
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',];
//this is to demonstrate for slow something will be the larger an array
const largeArray = new Array(10000).fill('letters');
const hugeArray = new Array(100000).fill('dory')

//TODO: $$$ END GLOBAL VARIABLES $$$

//This array has a Big O notation of O(n). Linear time. For each element, there is a new operation the computer does. This means the Big O depends on the number of (n) (1000 item array = O(1000)) Probably the most common you will find is O(n)
function O_of_n(array) { //call is on line 27
    let runtime0 = performance.now();

    for(i=0; i < array.length; i++) {
        if(array[i] === 'letters') {
            console.log('found letters!');
        };
    };

    let runtime1 = performance.now();

    console.log('Call to find letters took ' + (runtime0 - runtime1) + ' milliseconds')
}

//pass an array into this funtion and run it
// O_of_n(largeArray);

//this function is for O(1), Constant time. Always just grabbing the first item in an array. The computer always just performs 1 calculation. There are 2 console logs in this function, so 2 operations, so the Big O of this function will be O(2). This always just gets rounded down to O(1). 
function O_of_1(array) { //call is on line 
    console.log(array[0]); //O(1)
    console.log(array[1]); //O(1)
}

//pass an array into this funtion and and run it
O_of_1(letters);
