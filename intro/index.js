
import slugify from "slugify";//var slugify = require('slugify');
const title = slugify('some string','*');//second parameter replaces '-'
console.log(title);