import React, {FC, useEffect, useState} from 'react';
import './NumericBase.scss';
import {invoke} from "@tauri-apps/api/tauri";
import * as FaIcons from "react-icons/fa";

interface NumericBaseProps {
}

const NumericBase: FC<NumericBaseProps> = () => {
    const convert_from_base_x_to_base_y = (baseX: number, baseY: number, input: string) => invoke('convert_from_base_x_to_base_y', {
        baseX: baseX,
        baseY: baseY,
        input: input
    })
    const [value, setValue] = useState('');
    const [x, setX] = useState('16');
    const [y, setY] = useState('10');

    const [output, setOutput] = useState('');

    useEffect(() => {
        let nX = parseInt(x);
        let nY = parseInt(y);
        if (value.length > 0 && nX >= 2 && nX <= 36 && nY >= 2 && nY <= 36) {
            convert_from_base_x_to_base_y(nX, nY, value).then((result: string) => {
                setOutput(result);
            });
        }
    }, [value, x, y]);

    const handleInputChange = event => {
        setValue(event.target.value);
    };

    const handleXChange = event => {
        setX(event.target.value);
    };

    const handleYChange = event => {
        setY(event.target.value);
    };

    const switchInputs = () => {
        let tempX = x;
        setX(y);
        setY(tempX);
    };

    return (
        <div data-testid="NumericBase">
            <div className="container numeric-base">
                <p>Fill in text with your input and set <span
                    className="highlight highlight-one">X</span> and <span
                    className="highlight highlight-two">Y</span> with your desired numeral systems (2-36).<br/><br/>
                    <span className="underline">Example:</span> Input = 10; <span
                        className="highlight highlight-one">X</span> = 10; <span
                        className="highlight highlight-two">Y</span> = 16</p>
                <div className="align-center">
                    <div className="input-label">
                        <input id="a" value={value} onChange={handleInputChange} placeholder="Text"/>
                    </div>
                </div>
                <div className="besides-container space-between">
                    <div className="input-label small-input">
                        <label className="label" htmlFor="x"><span className="highlight highlight-one">X</span> =
                        </label>
                        <input id="x" value={x} min={2} max={36} onChange={handleXChange}/>
                    </div>
                    <button onClick={switchInputs} className="btn btn-rounded">
                        <FaIcons.FaExchangeAlt/>
                    </button>
                    <div className="input-label small-input">
                        <label className="label" htmlFor="y"><span className="highlight highlight-two">Y</span> =
                        </label>
                        <input id="y" value={y} min={2} max={36} onChange={handleYChange}/>
                    </div>
                </div>
                <div className="output-container">
                    <div className="headline-container">
                        <div className="headline">Output</div>
                    </div>
                    <div className="result">
                        <div className="title">Result</div>
                        <div className="value text-uppercase">{output}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NumericBase;
