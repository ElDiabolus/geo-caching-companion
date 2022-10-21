import React, {FC, useEffect, useState} from 'react';
import './ComplexNumbers.scss';
import {invoke} from "@tauri-apps/api/tauri";

interface ComplexNumbersProps {
}

const ComplexNumbers: FC<ComplexNumbersProps> = () => {
    const decimals = 5;

    const complex_cartesian_to_polar = (a: any, b: any) => invoke('complex_cartesian_to_polar', {a: a, b: b})
    const complex_polar_to_cartesian = (radius: any, angle: any) => invoke('complex_polar_to_cartesian', {
        radius: radius,
        angle: angle
    })
    const [a, setA] = useState('1');
    const [b, setB] = useState('1');

    const [r, setR] = useState('');
    const [phi, setPhi] = useState('');

    const [isLastChangeOnInput, setIsLastChangeOnInput] = useState(true);

    const handleAChange = event => {
        setIsLastChangeOnInput(true);
        setA(event.target.value);
    };

    const handleBChange = event => {
        setIsLastChangeOnInput(true);
        setB(event.target.value);
    };

    const handleRChange = event => {
        setIsLastChangeOnInput(false);
        setR(event.target.value);
    };

    const handlePhiChange = event => {
        setIsLastChangeOnInput(false);
        setPhi(event.target.value);
    };

    useEffect(() => {
        if (isLastChangeOnInput) {
            let nA = parseFloat(a);
            let nB = parseFloat(b);
            if (nA > 0 && nB > 0) {
                complex_cartesian_to_polar(nA, nB).then(result => {
                    let tempPhi = Math.round((result['phi'] * Math.pow(10, decimals))) / Math.pow(10, decimals);
                    let tempRadius = Math.round((result['radius'] * Math.pow(10, decimals))) / Math.pow(10, decimals);
                    setPhi(tempPhi.toString());
                    setR(tempRadius.toString());
                })
            }
        } else {
            let nR = parseFloat(r);
            let nPhi = parseFloat(phi);
            if (nPhi > 0 && nR > 0) {
                complex_polar_to_cartesian(nR, nPhi).then(result => {
                    let tempA = Math.round((result['a'] * Math.pow(10, decimals))) / Math.pow(10, decimals);
                    let tempB = Math.round((result['b'] * Math.pow(10, decimals))) / Math.pow(10, decimals);
                    setA(tempA.toString());
                    setB(tempB.toString());
                })
            }
        }
    }, [a, b, r, phi, isLastChangeOnInput]);

    return (
        <div data-testid="ComplexNumbers">
            <div className='container complex-numbers'>
                <div className="headline-container">
                    <div className="headline">Cartesian</div>
                </div>
                <div className="besides-container space-between">
                    <div className="input-label small-input">
                        <label className="label" htmlFor="a"><span className="highlight highlight-one">a</span> =
                        </label>
                        <input id="a" pattern="\d+((\.|,)\d+)?" value={a} onChange={handleAChange}/>
                    </div>
                    <div className="input-label small-input">
                        <label className="label" htmlFor="b"><span className="highlight highlight-two">b</span> =
                        </label>
                        <input id="b" pattern="\d+((\.|,)\d+)?" value={b} onChange={handleBChange}/>
                    </div>
                </div>
                <div className="headline-container">
                    <div className="headline">Polar</div>
                </div>
                <div className="besides-container space-between break-container">
                    <div className="input-label">
                        <label className="label" htmlFor="radius"><span
                            className="highlight highlight-three">Radius</span> =
                        </label>
                        <input id="radius" pattern="\d+((\.|,)\d+)?" value={r} onChange={handleRChange}/>
                    </div>
                    <div className="input-label">
                        <label className="label" htmlFor="angle"><span
                            className="highlight highlight-four">Angle φ in °</span> =
                        </label>
                        <input id="angle" pattern="\d+((\.|,)\d+)?" value={phi} onChange={handlePhiChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComplexNumbers;
