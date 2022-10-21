import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import Caesar from './Caesar/Caesar';
import Home from './Home/Home';
import FoxCode from './FoxCode/FoxCode';
import Atbash from './Atbash/Atbash';
import Base from './Base/Base';
import CipherDisk from './CipherDisk/CipherDisk';
import AlphabetValues from './AlphabetValues/AlphabetValues';
import QuadraticEquation from './QuadraticEquation/QuadraticEquation';
import Range from "./Range/Range";
import ComplexNumbers from "./ComplexNumbers/ComplexNumbers";
import NumericBase from "./NumericBase/NumericBase";
import Hash from './Hash/Hash';
import RomanNumbers from './RomanNumbers/RomanNumbers';
import Morse from './Morse/Morse';
import TomTom from './TomTom/TomTom';

export const PageData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
        hideInSearch: true,
        pageElement: <Home/>
    },
    {
        title: 'Caesar',
        path: '/caesar',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <Caesar/>
    },
    {
        title: 'AlphabetValues',
        path: '/alphabetvalues',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <AlphabetValues/>
    },
    {
        title: 'FoxCode',
        path: '/foxCode',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <FoxCode/>
    },
    {
        title: 'Atbash',
        path: '/atbash',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <Atbash/>
    },
    {
        title: 'Base',
        path: '/base',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <Base/>
    },
    {
        title: 'Hash',
        path: '/hash',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <Hash/>
    },
    {
        title: 'Roman Numbers',
        path: '/roman',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <RomanNumbers/>
    },
    {
        title: 'CipherDisk',
        path: '/cipherdisk',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <CipherDisk/>
    },
    {
        title: 'Morse',
        path: '/morse',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <Morse/>
    },
    {
        title: 'TomTom',
        path: '/tomtom',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <TomTom/>
    },
    {
        title: 'Quadratic Equation',
        path: '/quadratic-equation',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <QuadraticEquation/>
    },
    {
        title: 'Range',
        path: '/range',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <Range/>
    },
    {
        title: 'Numeric Base Converter',
        path: '/numeric_base',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <NumericBase/>
    },
    {
        title: 'Complex Numbers',
        path: '/complex-numbers',
        icon: <IoIcons.IoIosArrowForward/>,
        cName: 'nav-text',
        hideInSearch: false,
        pageElement: <ComplexNumbers/>
    }
];