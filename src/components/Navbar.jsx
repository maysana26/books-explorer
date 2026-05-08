import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

            <Link className="navbar-brand" to="/">
                Book Explorer
            </Link>

            <div>

                <Link className="btn btn-outline-light mx-2" to="/">
                    Home
                </Link>

                <Link className="btn btn-outline-light" to="/books">
                    Books
                </Link>

            </div>

        </nav>

    );
};

export default Navbar;