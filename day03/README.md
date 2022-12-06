## Lab - Review

https://github.com/alexwu77/web_programming/blob/main/day03/lab_review/

## Forms

Official doc: https://reactjs.org/docs/forms.html

Example: https://github.com/alexwu77/web_programming/blob/main/day03/forms/

* Use arrow style to declare methods
* Event handler: `event.target.id`, `event.target.name`, `event.target.name`
* `<form onSubmit={...}>`

## List

Official doc: https://reactjs.org/docs/lists-and-keys.html

Example: https://github.com/alexwu77/web_programming/blob/main/day03/list/

* Use `map` function
* Provide a `key` prop for the list items inside the `map` function
* Use stable IDs for keys (do not use list index for example)

## Router

Official site: https://reactrouter.com/en/main

Example: https://github.com/alexwu77/web_programming/blob/main/day03/react-router/

Install v6
`npm install react-router-dom`

In `App.js`, add:
```
import { Routes, Route, Outlet, Link } from "react-router-dom";
```

In `index.js`, remember to wrap `<App />`
```
import { BrowserRouter } from "react-router-dom";

...

<BrowserRouter>
   <App />
</BrowserRouter>
```

Note:

A `<BrowserRouter>` stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

A `<Link>` is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a `<Link>` renders an accessible `<a>` element with a real href that points to the resource it's linking to. This means that things like right-clicking a `<Link>` work as you'd expect.

### Params

Like https://twitter.com/alexwu

Add import of `useParams`

```
<Route path="users">
  <Route path=":userId" element={<ProfilePage />} />
</Route>
```

### Search Params

```
let [searchParams, setSearchParams] = useSearchParams();
...
searchParams.get('city')
```
