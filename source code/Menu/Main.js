/*const A = ["Ay", "aw", "at", "a"];
const E = ["Em", "Eg", "E", "e"];
const K = ["K", "Kbr", "k"];
const B = ["B", "b"];
const D = ["D", "d"];
const M = ["M", "m"];
const H = ["H", "h"];
const I = ["I", "i"];
const C = ["C", "c"];
const G = ["G", "g"];
const S = ["S", "sp", "si"];
const T = ["T", "Tr", "t"];*/

const genes = {
    A: ["Ay", "aw", "at", "a"],
    E: ["Em", "Eg", "E", "e"],
    K: ["K", "Kbr", "k"],
    B: ["B", "b"],
    D: ["D", "d"],
    M: ["M", "m"],
    H: ["H", "h"],
    I: ["I", "i"],
    C: ["C", "c"],
    G: ["G", "g"],
    S: ["S", "sp", "si"],
    T: ["T", "Tr", "t"],

}
/*function answered() {
    let combination = document.getElementById('combination').value;
    for (let i = 0; i < combination.length; i++) {
        for(let [key, value] of Object.entries(genes)) {
            for(let j = 0; j < value.length; j++) {
                console.log("It is " + combination[i]);
                if(value[j] == combination[i]) {
                    console.log("Is " + value[j] + " There? : True");
                    break;
                }
                else console.log("Is " + value[j] + " There? : False");
            }
        }
    }
    console.log(combination);
}
*/
let input = document.getElementById("combination");

let combination = [];
input.addEventListener('keypress', function (key){
    if(key.key == ' ') {
        console.log(combination);
        combination = [];
    }
    else{
        combination.push(key.key);
    }
})