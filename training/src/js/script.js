// const myModule = require("./main");

// myModuleInstance = new myModule();

// myModuleInstance.hello();
// myModuleInstance.bye();

import {one, two} from "./main.js";
import sayHi from "./main.js";

console.log(`first number: ${one}, second number: ${two}`);

sayHi();