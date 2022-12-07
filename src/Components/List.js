import React from 'react'
import "../List.css"
import { Link } from "react-router-dom";

const List = () => {
    return (
        <div>
            <div className="cards-wrapper">
                <Link to="/researcher">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <h4>title</h4>
                        <p>aaaaa</p>
                    </div>
                </Link>
                <Link to="/researcher">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <h4>title</h4>
                        <p>aaaaa</p>
                    </div>
                </Link>
                <Link to="/researcher">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <h4>title</h4>
                        <p>aaaaa</p>
                    </div>
                </Link>
                <Link to="/researcher">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <h4>title</h4>
                        <p>aaaaa</p>
                    </div>
                </Link>
                <Link to="/researcher">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <h4>title</h4>
                        <p>aaaaa</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default List