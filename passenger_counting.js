//My Code
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// console.log(countEl);

let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent = count;
    // console.log(count);
}

function save() {
    let countStr = count + " - ";
    // console.log(count);
    saveEl.textContent = saveEl.textContent + countStr;
    count = 0;
    countEl.textContent = count;
}



//Previous entries add kra hai is mai naya lekin is mai ek problem hai spacing ka try kr pta chalenga 
// 1. Grab the save-el paragrah and store it in a variable called saveEl
/*let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el");

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStr = count + " - ";
    saveEl.innerText = saveEl.innerText + countStr;
    console.log(count)
}
*/

//Yaha pr upar ka solution diya hai textcontent use krke space ka issue thik kr sakte hai
/*let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0;
}

// Google:
// innerText alternative mdn
*/
