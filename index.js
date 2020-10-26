// Code your solutions in this file
function countDown() {
   let count = 10;
    while (count >= 0) {
        console.log(count);
        count --;
    }
}

function writeCards(names, message) {
    let new_arr = [];
    for (let i = 0; i < names.length; i += 1) {
       new_arr.push("Thank you, " + names[i] + ", for the wonderful " + message + " gift!");
    }
    return new_arr;
}