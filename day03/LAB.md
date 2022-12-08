## Sidebar, Form, Router All Together

In this lab, we will create a page that combines what we have learned so far in to a single page.

Your application should contain at least two landing pages, Home and Search.

Your Home should look like:

![home](https://github.com/alexwu77/web_programming/raw/main/day03/lab_home.png)

Your Search should look like:

![search](https://github.com/alexwu77/web_programming/raw/main/day03/lab_search.png)

On the Search page, once the user enters a search term in the input box and clicks `Submit`, the page should navigate back to itself (which is the Search page) but should show the search term the user entered previously.

![search](https://github.com/alexwu77/web_programming/raw/main/day03/lab_search_result.png)

Furthermore, the url in the browser should look something like: `http://localhost:3000/search?q=abcdefg`

To help you get started, I have provided the skeleton code for `App.js`:

```
import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Outlet, Link, useSearchParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* ... */}
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* ... */}
    </div>
  );
}

function MySidebar() {
  return(
    {/* ... */}
  )
}

function Title() {
  return(
    {/* ... */}
  )
}

function Home() {
  return (
    {/* ... */}
  );
}

function NoMatch() {
  return (
    {/* ... */}
  );
}

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/search')
  };

  return (
    <div>
      <h2>Your search term: {/* ... */}</h2>
      <form onSubmit={/* ... */}>
        {/* ... */}
      </form>
     </div>
  );
}

export default App;

```

The `Search` component is the most complicated, so here are some hints to get you started:

* The `navigate` function, provided by react router, will redirect the browser to the destination url. Here, since we use `/search` as the destination url, it will redirect back to itself.
* The `navigate` function will also include in the url all the `<input>` fields in the form when it does the redirect. For example, if you have a `<input name="xyz" />` in the form, when `navigate('/search')` is called, the result url will look like `http://localhost:3000/search?xyz=xxxxx`. Pretty cool right?
