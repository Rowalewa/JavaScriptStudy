// in the past people would use require function to import functions and codes from other files
// now we use import
import { capitalizeString } from "./string_function_for_import.js"; // Note the .js extension
const cap = capitalizeString("hello!");

console.log(cap);

// import all
import * as capitalizer from "./export.js";

// import default export
import subtract from "./fallbackExport.js";
console.log(subtract(7, 4))
