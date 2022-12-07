import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return <header>
        <div className = "logo">
            <h3>ホームページ名</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
                <li>
                    <Link to="/researcher">研究者の方へ</Link>
                </li>
                <li>
                    <Link to="/investor">企業の方へ</Link>
                </li>
            </ul>
        </nav>
        <form>
            <input type="text" placeholder="Search" />
        </form>
    </header>;
};

export default Header;