import { Link } from "react-router-dom";

const GuestPage = () => {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload. SEX
          </p>
          <Link to={'/'}>Home Page</Link>
        </header>
      </div>
    );
};
  
export default GuestPage;