# Modern Javascript Development

1. Module => Bundling => Transpiling / Polyfilling|babel(convert to es5) => Javascript Bundle.

## Build tools `webpack` hard to build or `Parcel `easy to build for production

# Parcel ![parcel](https://user-images.githubusercontent.com/67066348/152675461-d666dff8-ae4c-4996-8925-56800fa8a46b.png)

```
sudo npm i parcel
npm i parcel --save-dev
npx parcel index.html

npm uninstall parcel
```

```
if(module.hot) {
  module.hot.accept()
}
```

### Transpiling

```
.json  "script": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
1. `"parcel build index.html --dist-dir ./dist"`
cmd=> `npm run build`
```

### Polyfilling

```
npm i core-js

import script.js file| import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

cmd$ npm i regenerator-runtime
// Polifilling async function
import 'regenerator-runtime/runtime';
```

---

### gitignore `.gitignore` `node_modules dist .parcel-cache` | .DS_store > for macOS

**GIT**

- git: git add -A, git status, git reset --hard HEAD(back to previous git add file)
- git log(copy-commit id) then, git reset -hard demo83896EXAMPLE733974cde (back to previous commit code)
- git branch new-feature(new branch create), git checkout new-feature(switch branch), git checkout master(switch branch if merge code from new-feature branch), git merge new-feature , git push origin new-feature (branch push)
- [git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## **Netlify:** config your build, build command >`parcel build index.html --dist-dir ./dist` , publish-directory> `dist`

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

### One time function | not reuse it

```
(function() {

})();
```
