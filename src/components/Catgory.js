import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Catgory = () => {
    return (
        <div><section className="section2">
            <ul>
                <li>
                    <Link to="/food">
                        <span className="material-symbols-outlined">
                            sports_bar
                        </span>
                        <h3>美食探索</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/subway">
                        <span className="material-symbols-outlined">
                            subway
                        </span>
                        <h3>交通探索</h3>
                    </Link>

                </li>
                <li>
                    <Link to="/hotel">
                        <span className="material-symbols-outlined">
                            hotel
                        </span>
                        <h3>住宿探索</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/temple">
                        <span className="material-symbols-outlined">
                            temple_buddhist
                        </span>
                        <h3>景點探索</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/surfing">
                        <span className="material-symbols-outlined">
                            surfing
                        </span>
                        <h3>活動探索</h3>
                    </Link>
                </li>
            </ul>
        </section>
            <Outlet />
        </div>
    )
}

export default Catgory