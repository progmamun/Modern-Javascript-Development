# Modern Javascript Development

1. Module => Bundling => Transpiling / Polyfilling|babel(convert to es5) => Javascript Bundle.

## Build tools `webpack` hard to build or `Parcel `easy to build for production

```
sudo npm i parcel
npm i parcel --save-dev
npx parcel index.html
```

## Module

- Reusable piece of code that **encapsulates** implementation details;
- Usually a **standalone file,** but it doesn't have to be.
- **Compose software:** Modules are small building blocks that we put together to build complex applications;
- **Isolate components:** Modules can be developed in isolation without thinking about the entire codebase;
- **Abstract code:** Implement low-level code in modules and import these abstractions into other modules;
- **Organized code:** Modules naturally lead to a more organized codebase;
- **Reuse code:** Modules allow us to easily reuse the same code, even across multiple projects.

## Importing Modules before execution

- Modules are imported synchronously
- Possible thanks to top-level("static") imports, which make imports known before execution
- This makes bundling and dead code elimination possible

---

`<script type="module" defer src="script.js"></script>`

- ES modules, two types of exports. Named Exports and Default Exports.
  **Named Exports:**

```
import './shoppingCart';
import { addToCart, totalPrice as price, tq } from './shoppingCart';
import * as ShoppingCart from './shoppingCart.js';
```

**Default Export**

```
export default function (product, quantity) {};
import add from './shoppingCart';
add('pizza', 2);
```

- didn't use strict mode module have default
  ###One time function | not reuse it

```(function() {

})();
```
