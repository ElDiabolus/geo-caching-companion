import React, {useEffect, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {Link, useLocation} from 'react-router-dom';
import {PageData} from '../../pages/PageData';
import './Menu.scss';
import {IconContext} from 'react-icons';

function Menu() {
    const [sidebar, setSidebar] = useState(false);
    const [activeItem, setActiveItem] = useState(PageData[0]);
    const showSidebar = () => setSidebar(!sidebar);
    const location = useLocation()

    let backButton;
    if (window.location.pathname !== '/') {
        backButton = <Link to='/' className='back-button' onClick={() => {
            changeActiveItem(PageData[0])
        }}>
            <IoIcons.IoIosArrowBack/> <span>Back</span>
        </Link>;
    }

    const changeActiveItem = (item) => {
        setActiveItem(item);
    }

    useEffect(() => {
        PageData.forEach(function (element) {
            if (element.path === window.location.pathname) {
                setActiveItem(element);
            }
        })
    }, [location]);

    return (
        <div data-testid="Menu" className="sidebar">
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar'>
                    <div className="container">
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                        <div className="headline">
                            <div>{activeItem.title}</div>
                        </div>
                        {backButton}
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle container'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {PageData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={() => {
                                        changeActiveItem(item)
                                    }}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    );
}

export default Menu;
