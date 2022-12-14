## Lab - Review

The getPosts method:

```
/* TODO: finish this method */
getPosts = () => {
  const recentPostsRef = query(ref(database, 'posts'), limitToLast(100));
  onValue(recentPostsRef, (snapshot) => {
     let newPosts = []
     snapshot.forEach((childSnapshot) => {
       /* TODO: parse the childSnapshot and use newPosts.push() to store the key and the post pair. You can use console.log() first to see what childSnapshot looks like. */
       const k = childSnapshot.key;
       const p = childSnapshot.val().post;
       newPosts.push({k, p})
     });
     this.setState({posts: newPosts})
   }, {
     onlyOnce: true
   });
}
```

The componentDidMount:

```
componentDidMount() {
  /* TODO: call the method to get posts */
  this.getPosts();
}
```

The handleSubmit method:

```
handleSubmit = (e) => {

  .....

  /* TODO: call the method to get the posts */
  this.getPosts();

};
```

The render method:

```
render() {
  const listPosts = this.state.posts.map((v) =>
    <ListItem key={v.k.toString()} post={v.p} />
  );
  return (
    <div>
       <ul>
         {listPosts}
       </ul>
       .....
}
```

Discussions:

Q. In getPosts(), What is a `ref` and a `onValue` callback preferred over a blocking call?

A: It's all about responsiveness.

Consider a blocking call: `fetch()` -> `wait 5 secs` -> `show result when ready` vs a non-blocking call: `fetch()` -> `immediately return a ref object` -> `user can still interact with UI while the request is being processed by the server` -> `show result when ready`

More info: [Blocking vs Non-blocking](https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2/#:~:text=Blocking%20refers%20to%20operations%20that,a%20non%2DJavaScript%20operation%20completes)

Consider these two examples:

```
// Sync
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log

// Async
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log
```

Q: Why push both key and value in `newPosts.push({k, p})`?

A: So the ListItem can have a unique `key` property.

Q: Why use `componentDidMount` hook?

A: https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class

## Final Term Project - Preview

For the final term project, we want you to combine everything you have learned in React and create a production-ready, real-life feeling website.

### Mission statement

You are a team of expert web programmer, and you are hired by a corporation to work on a consumer facing project. The requirements are as followed. Your goal is to use your team work, originality and creativity to design a fully-functional product with the upmost user experience in mind.

### Requirements (subject to change)

Your project should have the following components:

* A user facing application:
  * Front page with nice looking graphics and corporate-ish styling
  * Site navigation
  * User signup, login
  * Search for items - user can type in query and get result list of items.
    * Bonus: autocomplete (consider: https://www.npmjs.com/package/react-autocomplete)
    * Bonus: infinity scroll (consider: https://www.npmjs.com/package/react-infinite-scroll-component)
  * Item Detail - user can select one result from the result list to see item details.
    * Bonus: user reviews and ratings
  * Use interaction - user can interact with the item in the detail list. The item could be a product, a blog post, a flight ticket, and will require different interaction.
  * Result / history page - the user can see the result of their prior interaction in a result / history page. This could be a shopping cart, a bookmark collection etc. There could be one or more results. User should be allowed to manage their results (e.g. remove an item from the shopping cart, deleting a bookmark)
  * Bonus: any other features you can think of that will improve UX.
* An admin application to:
  * Protected by admin passwords
  * Add / delete items. An item should have:
    * Images
      * Bonus: can upload images
    * Title
    * Description
    * Inventory (if applicable)
  * Inspect users and their result page

Your project should be hosted on Firebase with an URL to allow public access.

### Example

A typical example will be a shopping website (Amazon.com). Other example including twitter.com, booking.com, Google Flights, medium.com, etc. The possibility is endless, and your originality matters!

### Scoring methodology (subject to change)

Your project will be scored based on the following:
* Meets all the Requirements
* Bonuses
* User experience (UX)
* Originality and creativity
* Look and feel

## Storing / Retrieving Images

https://firebase.google.com/docs/storage/web/start

Don't forget to edit your Rules!

To upload filse: https://firebase.google.com/docs/storage/web/upload-files

## Prettify Your application

Your website needs professional look and feel. Help is on the way.

### Bootstrap JS

* Official site: https://react-bootstrap.github.io/
* Example: https://getbootstrap.com/docs/4.0/examples/

### Materialized UI

* Official site: https://mui.com/
* Example: https://mui.com/material-ui/getting-started/templates/

### Free react templates

Google: free react templates

Or, some resources to consider:
* https://www.creative-tim.com/templates/react-free
* https://dev.to/davidepacilio/35-free-react-templates-and-themes-32ci
* https://hashnode.com/post/35-free-react-templates-and-themes-you-should-use-in-2021-cklw9iu7c022b56s1ezgz033j

### Other styling components you can find...

## Q&A and Feedback

Ask away!

## To Conclude:

Let's go back in time to day01 and review these good practices: https://github.com/alexwu77/web_programming/tree/main/day01#good-coding-principles


# Thank You!!
