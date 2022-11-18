import { Link } from 'react-router-dom';

function topnav(props) {
    return(
        <div>
            <div>
                <p>Day Logger</p>
                <Link to="/log">Log Day</Link>
                <Link to="/edit">Edit Questions</Link>
                <Link to="/view">View Data</Link>
                <Link to="/profile">profile</Link>
            </div>
        </div>
    );
} export default topnav;