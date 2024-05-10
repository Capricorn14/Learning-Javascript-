//errors and bugs prevention

function addTwoNums(a, b) {
    try{ 
        if (typeof(a) != 'number') {
            throw new ReferenceError('The first argument is not a number')
        }
        else if (typeof(b) != 'number') {
            throw new ReferenceError('The second argument is not a number')
        }
        else { 
            console.log(a + b)
        }  
    } catch (err) {
        console.log("Error!" , err)
    }
     
}

//invoke the function with a number and a string argument
addTwoNums(5, "5");

console.log("It still works")

