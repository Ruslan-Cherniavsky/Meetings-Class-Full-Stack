import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="purple lighten-2">
            <div className="nav-wrapper">
                <Link to="/ref_table" className="brand-logo">
                    Team Meetings
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>




                    <li>
                        <Link to="/ref_form">Ref_Form</Link>
                    </li>

                    <li>
                        <Link to="/ref_table">Ref_Table</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export { Header };
