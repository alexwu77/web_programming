### Day01: Lab

In your ReactJS app, create a page with 3 components: Title, Sidebar, Main. The layout should look like this:

<pre>
--------------------------------------------
				   Title
--------------------------------------------
|      |
| Side |
| bar  |
|      |               Main
|      |
|      |
|      |
</pre>

* For the side bar, use https://github.com/azouaoui-med/react-pro-sidebar . Read the instruction carefully.
   * In order to use react-pro-sidebar, you will also need to modify `index.js` so you can wrap `<App/>` with `<ProSidebarProvider>`.
* In the src/components/ folder, there should be 3 files corresponding to the 3 components: `title.js`, `sidebar.js`, `main.js`.
* In your sidebar.js, the name of the component cannot be `Sidebar`, because it conflicts with the react-pro-sidebar library. You can name it as `MySidebar`.

Sample:
![ReactJS welcome page](https://github.com/alexwu77/web_programming/raw/main/day01/lab_result.png)
