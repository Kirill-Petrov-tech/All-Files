// function myModule() {
//     this.hello = function() {
//         console.log("Hello!");
//     };

//     this.bye = function() {
//         console.log("Bye!");
//     }
// }


// module.exports = myModule;

export let one = 1;

let two = 2;
export {two}

export default function sayHi() {
    console.log("hi!");
}