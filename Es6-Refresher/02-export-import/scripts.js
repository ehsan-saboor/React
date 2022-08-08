// export and imports

// import from sample 1
import myname from "./sample-1.js";
console.log(myname)



// import from sample 2
import { sayhello } from "./sample-2.js";
sayhello()

import { data } from "./sample-2.js";
// import { data as da} from "./sample-2.js"; we can change the declared name 
console.log(data)


// we can also import in both one line
// import { sayhello, data } from "./sample-2.js";


// we can also import entire content of page through
// import * as bundle from "./sample-2.js"; // where bundle is boject name
// console.log(bundle.sayhello())


// we can import content of (export default) through call name of that variable, and default is declared only once
// import myname from "./sample-1.js"
// console.log(myname)