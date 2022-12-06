import './App.css';
import { Routes, Route, Outlet, Link, useParams, useSearchParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
	 <Routes>
	   <Route path="/" element={<Layout />}>
		  <Route index element={<Home />} />
		  <Route path="about" element={<About />} />
		  <Route path="dashboard" element={<Dashboard />} />

		  <Route path="users">
		    <Route path=":userId" element={<ProfilePage />} />
		  </Route>

		  <Route path="search" element={<Search />} />

		  {/* Using path="*"" means "match anything", so this route
				  acts like a catch-all for URLs that we don't have explicit
				  routes for. */}
		  <Route path="*" element={<NoMatch />} />
	   </Route>
	 </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users/alexwu">Who am I?</Link>
          </li>
			 <li>
            <Link to="/search?city=taipei">Search</Link>
          </li>
			 <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function ProfilePage() {
  let { userId } = useParams();

  return (
    <div>
      <h2>This is {userId}'s profile</h2>
    </div>
  );
}

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h2>Your search city: {searchParams.get('city')}</h2>
    </div>
  );
}

export default App;
