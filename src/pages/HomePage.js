import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div className="App">
        <header className="App-header">
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to={'/router'}>router page</Link>
        </header>
      </div>
    );
};
  
export default HomePage;