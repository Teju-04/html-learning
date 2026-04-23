// Async Function => Prefixed with the word async
// => it also has try and catch blocks
// Interview Question: Write a piece of code that explains async and await in javascript

async function getData() {
    try {
        let response = await fetch("https:/jsonplaceholder.typicode.com/posts");
        console.log(response);
        let result = await response.json();
        // console.log('data is',result);

    }
    catch (error) {
        console.log("Error", error);
    }
}

getData();

