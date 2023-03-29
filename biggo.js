//finding nemo/ Give the computer a basic instruction.
const nemo = ['nemo', 'bob', 'teddy', 'graceana'];

function findNemo(array) {
    for(i=0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('found NEMO!')
        } else {
            console.log(array[i])
        }
    }
}

findNemo(nemo)

