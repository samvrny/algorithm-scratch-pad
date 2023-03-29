//NOTE: This JS file will have many functions that will require the user or tester to change code/uncomment function calls and pass different things into them in order to get the functions to work. This probably seems tedious and strange because it is, but this file was not made to be outstanding or deployable, it was made for learning, and really only to be understood by the learner, and that would be me (Sam)

// TODO: @@@ GLOBAL VARIABLES @@@
//finding nemo/ Give the computer a basic instruction with a simple array
const nemo = ['nemo', 'bob', 'teddy', 'graceana', 'nigel', 'dory', 'bruce'];
//this is to demonstrate for slow something will be the larger an array
const largeArray = new Array(10000).fill('nemo')

//TODO: $$$ END GLOBAL VARIABLES $$$

function findNemo(array) { //call is on line 23
    let runtime0 = performance.now();

    for(i=0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('found NEMO!');
        };
    };

    let runtime1 = performance.now();

    console.log('Call to find Nemo took ' + (runtime0 - runtime1) + ' milliseconds')
}

//pass an array into this funtion and run it
// findNemo(largeArray);

function biggoTest(array) {
    for(i=0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('found NEMO!');
        };
    };
}

//pass an array into this funtion and and run it
biggoTest();
