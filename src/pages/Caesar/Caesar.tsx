import {invoke} from '@tauri-apps/api/tauri';
import React, {useState} from 'react';
import Slider from 'react-input-slider';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import './Caesar.scss';

export default function Caesar() {
    const [shift, setShift] = useState(5);

    const handleNumberSliderChange = (x) => {
        setShift(x);
    }

    const encrypt = (text: string) => invoke('caesar_encrypt', {text: text, shift: Number(shift)})

    const decrypt = (text: string) => invoke('caesar_decrypt', {text: text, shift: Number(shift)})

    return (
        <div data-testid="Caesar">
            <AlgoPageWithProps name='Caesar' encryptFunction={encrypt} decryptFunction={decrypt} additionalChangeEffectDeps={[shift]}>
                <Slider
                    axis="x"
                    x={shift} xmin={1} xmax={26}
                    onChange={({x, y}) => handleNumberSliderChange(x)}
                />
                <div>
                    Verschiebung: <input type="number" value={shift} min={1} max={26} onChange={(event) => handleNumberSliderChange(event.target.value)}/>
                </div>
            </AlgoPageWithProps>
        </div>
    );

}