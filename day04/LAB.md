## Complete the Post page

### Mission

In today's lab, we will complete the Post page by also displaying the posts already submitted to server.

### Demo

https://ntut-web-by-alex-001.web.app/post

### Preparation

Since this is rather complicated, I will provide a skeleton code below, and you should read the following pointers:

* `query` & `onValue`
  * https://firebase.google.com/docs/database/web/lists-of-data#listen_for_value_events
  * This is a typical async observer pattern. We provide a callback function in `onValue` that will be called by firebase when it completes fetching data from the server.
* `componentDidMount`
  * https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
  * This method will be called once after the components is added to the browser window. Great for running initialization workflow, such as fetching posts from the server
* `Lists`
  * https://reactjs.org/docs/lists-and-keys.html
  * Refresh your memory!

### General Approach

So how do we do this? My idea below:

1. When the Post component is initialized and mounted, I will call a method to fetch all posts from the firebase database.
2. When the posts are retrieved from the server, I will parse the result and save them in a state variable `posts`.
3. When a user submits a post, I will also call the same method to fetch all posts from the server, so the user can see their posts.
4. In the render() method, add the list of posts.

### One more thing!

Under your project folder, edit `database.rules.json`:

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

This basically ensures that when you run `firebase deploy`, this database rule will be applied. You should also go to the firebase console and edit the Database -> Rules with the above.

### Skeleton Code

In the following skeleton code, I will mark the /* TODO */ for your reference. You might be wondering why I chose the traditional class style. This is because it lets me use the lifecycle methods so the posts fetching only happens once in the beginning, unless user submits a new post.

```
function ListItem(props) {
  return <li>{props.post}</li>;
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      posts: [],
    };
  }

  /* TODO: finish this method */
  getPosts = () => {
    const recentPostsRef = /* TODO: use the query() method */
    onValue(recentPostsRef, (snapshot) => {
       let newPosts = []
       snapshot.forEach((childSnapshot) => {
         /* TODO: parse the childSnapshot and use newPosts.push() to store the key and the post pair. You can use console.log() first to see what childSnapshot looks like. */
       });

		 // Save the newPosts to the state var.
       this.setState({posts: newPosts})
     }, {
		 // We only need to fetch once
       onlyOnce: true
     });
  }

  componentDidMount() {
	 /* TODO: call the method to get posts */
  }

  handleChange = (e) => {
     const {name , value} = e.target;
     if (name == 'post') {
        this.state.post = value
     }
  }

  handleSubmit = (e) => {
    let obj = {
      post : this.state.post,
    }
    // Create a unique key for new posts
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/posts/' + newPostKey] = obj;
    update(ref(database), updates);

    /* TODO: call the method to get the posts */

    e.preventDefault()
  };

  render() {
    const listPosts = /* TODO: convert this.state.posts into a list of <ListItem>. Remember to set the key and the post props */

    return (
      <div>
         <ul>
           {listPosts}
         </ul>
        <h2>Submit your post!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            New post:
            <input name="post" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Post!" />
       </form>
      </div>
    );
  }
}
```
