## Lab - Review

`index.js`:

```
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>
);
```

The `Search` component:
```
function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  // No need to use navigate, since form submission's default action is redirecting to itself with inputs as query parameters
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    // navigate('/search')
  };

  return (
    <div>
      <h2>Your search term: {searchParams.get('q')}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input name="q" />
        </label>
        <input type="submit" value="Submit" />
     </form>
    </div>
  );
}
```

Question: why is it preferred to use URL parameters to store user queries?


## Firebase Intro

Firebase is an app development platform that helps you build and grow apps and games users love.

What it can do:

* Realtime database
* Hosting
* Performance monitoring
* And more...

### Create your first project

https://console.firebase.google.com/u/0/

Click `+ Add a project`

Enter a project name: `ntut-web-by-alex-001`

Turn off `Enable Google Analytics for this project`, `Create project`

Project console: https://console.firebase.google.com/u/0/project/ntut-web-by-alex-001/overview

### Hosting your first React app

In Firebase console, `Add an app to get started` -> `Web`

Enter App name -> check `Also set up Firebase Hosting for this app.` -> `Register app`

In your project directory: `npm install firebase`

DO NOT copy the code snippet. You will retrieve the code later.

Run: `npm install -g firebase-tools` (can run it anywhere)

In your project directory:

Run: `firebase login`

Run: `firebase init`: use the Up/Down arrow keys and space to select these two:
* Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance]
* Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

Select `Use an existing application`, and select the project you just created.

Follow on screen instructions to finish using all the default values until the `=== Hosting Setup` section. Remember to use `build` as your public folder, and not the default `public`.

```
=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
```

In your project dictory:
Run: `npm run build` to build the production version of your app

Run: `firebase deploy`

Open the deployed app in browser.

### Realtime Database

Official doc: https://firebase.google.com/docs/database/web/start

Create a Realtime Database at: https://console.firebase.google.com/u/0/project/ntut-web-by-alex-001/database

Then, go to Rules and edit the timestamps so it does not expire.

Now retrieve the firebase code snippet from Settings: `Project Overview` -> `1 app` -> The gear icon -> scroll down. Copy the content to a new file `src/firebase.js`.

Then in the same file `src/firebase.js`, add:

```
...
import { getDatabase } from "firebase/database"
...
export const database = getDatabase(app);
```

Sample:

```
function Post() {
  const [post, setPost] = useState();

  const handleChange = (e) => {
    const {name , value} = e.target;
    if (name == 'post') {
      setPost(value)
    }
  }

  const handleSubmit = (e) => {
    let obj = {
      post : post,
    }

    // Create a unique key for new posts
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/posts/' + newPostKey] = obj;
    update(ref(database), updates);

    // To prevent the page from reloading; very useful for debugging
    e.preventDefault()
  };

  return (
    <div>
      <h2>Submit your post!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input name="post" onChange={handleChange}/>
        </label>
        <input type="submit" value="Post!" />
     </form>
    </div>
  );
}
```

Sample code in https://github.com/alexwu77/web_programming/blob/main/day04/firebase/src/App.js

Note: if you got permission denied when posting, check the Database -> Rules and make sure it looks something like this:

```
{
  "rules": {
    ".read": "now < 2673539200000",  // 2023-1-13
    ".write": "now < 2673539200000",  // 2023-1-13
  }
}
```
