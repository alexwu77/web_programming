# Intro to ReactJS

## Why ReactJS?

### What to expect working in a tech firm as a programmer?

#### Write as little lines of code as possible.

* __Aggressively__ find open source projects that can help you (and company approves).
* Stackoverflow (https://stackoverflow.com/) is your friend. Find your answers there.

#### Write readable code.

No __cryptic__ code!

```
# Example of cryptic code that you should NOT write

long tab1[]={ 989L,5L,26L,0L,88319L,123L,0L,9367L };
int tab2[]={ 4,6,10,14,22,26,34,38,46,58,62,74,82,86 };

main(m1,s) char *s; {
 int a,b,c,d,o[k],n=(int)s;
 if(m1==1){ char b[2*j+f-g]; main(l(h+e)+h+e,b); printf(b); }
 else switch(m1-=h){
	case f:
	 a=(b=(c=(d=g)<<g)<<g)<<g;
	 return(m(n,a|c)|m(n,b)|m(n,a|d)|m(n,c|d));
	case h:
	 for(a=f;a<j;++a)if(tab1[a]&&!(tab1[a]%
  ...
```

Also:
* Follow best practices for the language you choose.
* Have well established execution flow.
* Easy to follow logic.
* Add comments to explain your intention if it's not clear from reading the code.

#### Write easy to run / maintain code.

* Project structure is clear.
* Source code is well organized.
* The source files are properly named.
* Executing the code is straightforward.
* Well documented.

### Adopting a well-established framework

#### What is a framework in programming?

> A framework in programming is a tool that provides ready-made components or solutions that are customized in order to speed up development.

> A framework is defined by the principle of inversion of control (IoC).

> With traditional programming, the custom code calls into the library to access reusable code. With IoC, the framework calls on custom pieces of code when necessary.

```
# Traditional / procedural programming

def main():
    print("Hello World!")

if __name__ == "__main__":
    main()
```

```
# IoC

<html>
...
    <button onclick="myFunction()">Click me</button>
...
</html>

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
```
> A framework can include support programs, compilers, code libraries, toolsets, and APIs to develop software and create systems. Open-source frameworks are always being updated and improved.

#### Why framework?

> The purpose of a framework is to assist in development, providing standard, low-level functionality so that developers can focus efforts on the elements that make the project unique.

> Ultimately, frameworks are used to save time and money.

In other words, you get the benefits of the framework that quite match what we discussed earlier - write as little as possible, but high quality and easy-to-maintain code!

#### Example frameworks

* __.Net__ is Microsoft Framework and one of the most used.
* __Django__ is open source web development framework written in Python.
* __TensorFlow__ is one of the most popular machine learning frameworks to create deep learning algorithms and models.
* __ReactJS__ is one of the most popular Javascript frameworks.

### What is ReactJS and Why?

> The best fit for developing user interfaces is React, as it is a very declarative, fast, and flexible JavaScript framework.

> ReactJS provides a smooth solution to some of front-end programming’s most vexing issues, making it simple to create dynamic, interactive web programs.

### The Why's

* Probably the most popular Javascript framework.
* Two of the most popular Javascript frameworks in Taiwan (along with Vue.js).
* Great community offering great support.
* Regular maintained and updated.
* Easy to develop (write little code).
* Platform independent; can run on desktop and mobile devices with little to no changes to code.
* Reusable components.
* Fast!
* Great tools and open source libraries.


#### Not convinced? See real world examples

* __Facebook__ (also the initial creator)
* Instagram
* Netflix
* New York Times
* Dropbox

## Demo

### Prerequisites

```
# Node.js

$ node -v
v16.15.0

$ npm -v
npx 9.1.1

$ npx -v
9.1.1
```

Some background about __Node.js__:
> Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment.

> npm (originally short for Node Package Manager)[4] is a package manager (probably the most comprehensive and complete) for the JavaScript programming language maintained by npm, Inc. npx is npm's package runner.

If you are developing web applications, you must learn npm! It is the single most powerful JS package manager that contain almost every open source JS library.

Moving on to create your first app __my-app__.

```
$ npx create-react-app my-app

Creating a new React app in /private/tmp/my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

added 1395 packages in 1m

Success! Created my-app at /private/tmp/my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start
```

Notice the instructions on how to use npm to manage and run your application locally. Let's run the app.

```
$ cd my-app
$ npm start

Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.14:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

Now open http://localhost:3000 to see what it looks like:

![ReactJS welcome page](https://paper-attachments.dropbox.com/s_C282017B76413307FCCBDDD7202E167D00421CECBAFC87B8C619F533D86E5E23_1557331637345_Screen+Shot+2019-05-08+at+5.07.06+PM.png)

Let's change the page:
* Use __Atom__ to open `my-app/``
* Edit `src/App.js`, save
* The site should automatically refresh

Let's add a new component called __Title__ to the page

```
$ cd my-app
$ mkdir -p src/components
$ touch src/components/title.js
```

Paste this into title.js.

```
import React from 'react';

function Title() {
    return(
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>My App Page</h3>
            </div>
        </nav>
    )
}

export default Title;
```

Add the __Title__ component to the page.

```
import logo from './logo.svg';
import './App.css';
import Title from './components/title';

function App() {
  return (
    <div className="App">
      <Title/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello class!
        </p>
      </header>
    </div>
  );
}

export default App;
```

In order to use 3rd party CSS and JS libraries, let's add them in `src/index.html`.

This part goes to where other `<link>` tags are.
```
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
```

This part goes to the end of the `<body>`.
```
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
```

Back to http://localhost:3000 and see result. 
