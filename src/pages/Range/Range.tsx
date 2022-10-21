import React, {FC, useEffect, useState} from 'react';
import './Range.scss';
import {invoke} from "@tauri-apps/api/tauri";

interface RangeProps {
}

const Range: FC<RangeProps> = () => {
    const euler_decimal_range = (start: number, end: number) => invoke('euler_decimal_range', {start: start, end: end})
    const pi_decimal_range = (start: number, end: number) => invoke('pi_decimal_range', {start: start, end: end})
    const [index, setIndex] = useState('');
    const [digits, setDigits] = useState('');
    const [output, setOutput] = useState('');

    const [type, setType] = useState('');

    useEffect(() => {
        let nIndex = parseInt(index);
        let nDigits = parseInt(digits);
        if (nIndex > 0 && nDigits > 0) {
            if (type === "euler") {
                euler_decimal_range(nIndex, nDigits).then((result: string) => {
                    setOutput(result);
                })
            } else {
                pi_decimal_range(nIndex, nDigits).then((result: string) => {
                    setOutput(result);
                })
            }
        }
    }, [index, digits, type]);

    const handleIndexChange = event => {
        setIndex(event.target.value);
    };

    const handleDigitsChange = event => {
        setDigits(event.target.value);
    };

    return (
        <div data-testid="Range">
            <div className="container range">
                <div className="headline-container">
                    <div className="headline">Start Index</div>
                </div>
                <div className="align-center">
                    <div className="input-label">
                        <input id="index" type="number" value={index} onChange={handleIndexChange}/>
                    </div>
                </div>
                <div className="headline-container">
                    <div className="headline">Number of Digits</div>
                </div>
                <div className="align-center">
                    <div className="input-label">
                        <input id="digits" type="number" value={digits} onChange={handleDigitsChange}/>
                    </div>
                </div>
                <div className="headline-container">
                    <div className="headline">Type</div>
                </div>
                <div className="align-center">
                    <label className="select-box">
                        <select name="type" id="type" className="custom-select" onChange={e => setType(e.target.value)}
                                value={type}>
                            <option value="pi">Pi</option>
                            <option value="euler">Euler</option>
                        </select>
                    </label>
                </div>
                <div className="output-container">
                    <div className="headline-container">
                        <div className="headline">Output</div>
                    </div>
                    <div className="result">
                        <div className="title">Result:</div>
                        <div className="value">{output}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Range;
