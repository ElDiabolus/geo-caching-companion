import {invoke} from '@tauri-apps/api/tauri';
import React, {FC, useEffect, useState} from 'react';
import './QuadraticEquation.scss';

interface QuadraticEquationProps {
}

const QuadraticEquation: FC<QuadraticEquationProps> = () => {
    const equation = (a: any, b: any, c: any) => invoke('quadratic_equation', {a: a, b: b, c: c})
    const [a, setA] = useState('1');
    const [b, setB] = useState('1');
    const [c, setC] = useState('1');

    const [x1, setX1] = useState('');
    const [x2, setX2] = useState('');

    useEffect(() => {
        equation(parseFloat(a), parseFloat(b), parseFloat(c)).then((result) => {
            let tempX1 = result['x1'];
            let tempX2 = result['x2'];
            setX1(tempX1.toString());
            setX2(tempX2.toString());
        })
    }, [a, b, c]);

    const handleAChange = event => {
        setA(event.target.value);
    };

    const handleBChange = event => {
        setB(event.target.value);
    };

    const handleCChange = event => {
        setC(event.target.value);
    };

    return (
        <div data-testid="QuadraticEquation">
            <div className='container quadratic-equation'>
                <p>Solving <span className="highlight highlight-one">a</span>x² + <span className="highlight highlight-two">b</span>x + <span className="highlight highlight-three">c</span> = 0</p>

                <div className="besides-container space-between">
                    <div className="input-label">
                        <label className="label" htmlFor="a"><span className="highlight highlight-one">a</span> = </label>
                        <input id="a" pattern="\d+((\.|,)\d+)?" value={a} onChange={handleAChange}/>
                    </div>
                    <div className="input-label">
                        <label className="label" htmlFor="b"><span className="highlight highlight-two">b</span> = </label>
                        <input id="b" pattern="\d+((\.|,)\d+)?" value={b} onChange={handleBChange}/>
                    </div>
                    <div className="input-label">
                        <label className="label" htmlFor="c"><span className="highlight highlight-three">c</span> = </label>
                        <input id="c" pattern="\d+((\.|,)\d+)?" value={c} onChange={handleCChange}/>
                    </div>
                </div>

                <div className="output-container">
                    <div className="headline-container">
                        <div className="headline">Output</div>
                    </div>
                    <div className="result">
                        <div className="title">x1:</div>
                        <div className="value">{x1}</div>
                    </div>
                    <div className="result">
                        <div className="title">x2:</div>
                        <div className="value">{x2}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuadraticEquation;
