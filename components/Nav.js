import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className = {navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'> Home </Link>
                </li>
                <li>
                    <Link href='/about'> About </Link>
                </li>
            </ul>
            <div className="text-center text-warning">
                <h4>রমজানের শুভেচ্ছা</h4>
            </div>
        </nav>
    );
};

export default Nav;