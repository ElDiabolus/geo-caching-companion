import React, {FC, useEffect, useState} from 'react';
import './Home.scss';
import {PageData} from "../PageData";
import {Link} from "react-router-dom";

interface BaseProps {
}

const Home: FC<BaseProps> = () => {
    const [searchText, setSearchText] = useState("");
    const [sidebarSearchedData, setSidebarSearchedData] = useState(PageData);

    const handleSearchText = event => {
        setSearchText(event.target.value);
    };

    useEffect(() => {
        setSidebarSearchedData(PageData.filter(element => element.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 && element.hideInSearch === false));
    }, [searchText])

    return (
        <div className='container home' data-testid="Home">
            <p>Filter list:</p>
            <div className="form-element">
                <input type="text" value={searchText} onChange={handleSearchText} placeholder="Search..."/>
            </div>
            <ul className="searched-list">
                {sidebarSearchedData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default Home;