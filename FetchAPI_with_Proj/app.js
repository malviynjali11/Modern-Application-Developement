const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// Using async await 

const getFacts = async () => {
    console.log("Getting Data ......");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status); //JSON format
    let data = await response.json();
    factPara.innerText = data.fact;
}


// Promise Chaining

// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json()
//         })  
//         .then((data) => {
//             console.log(data);
//             factPara.innerText = data.fact
//         })
// }

btn.addEventListener("click", getFacts);




