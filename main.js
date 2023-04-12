// let getAndReturnPeople = async () => {
//     let response = await fetch('https://swapi.dev/api/people')
//     let parsedResponse = await response.json()
//     let peopleArray = parsedResponse.results;

//     return peopleArray;
// }
// let peopleArray = getAndReturnPeople();

// Take the code above and take a look at the people array that we get from this API.
// Copy this code and do one of the following in a js file:

// "Easy" - Loop through this array of objects and and log the name of each person

// let getAndReturnPeople = async () => {
//     let response = await fetch('https://swapi.dev/api/people')
//     let parsedResponse = await response.json()
//     let peopleArray = parsedResponse.results;

//     return peopleArray;
// }

// let peopleArray = getAndReturnPeople();
// const doProblem = async () => {    
//      let peopleArray = await getAndReturnPeople();    
//      console.log(peopleArray);    
//      // do your work here inside this function
//      for (let i=0; i<peopleArray.length; i++) {
//         console.log(peopleArray[i].name);
//      }
// }
// doProblem();




// Medium - Loop through this array and make a new array that only contains people that are shorter than 165cm

let getAndReturnPeople = async () => {
    let response = await fetch('https://swapi.dev/api/people')
    let parsedResponse = await response.json()
    let peopleArray = parsedResponse.results;

    return peopleArray;
}

let peopleArray = getAndReturnPeople();
const doProblem = async () => {    
     let peopleArray = await getAndReturnPeople();    
    //  console.log(peopleArray);    
     // do your work here inside this function
     for (let i=0; i<peopleArray.length; i++) 
        if ( peopleArray[i].height < 165) {
            console.log(peopleArray[i])
        }
     }

doProblem();


// Hard - loop thorugh and find the tallest and shortest males and females.

// Very Hard - loop through and for each person write a string that says "This person is <name> and their ship is <name of ship if any>"
// if no ship, say "and they have no ship."