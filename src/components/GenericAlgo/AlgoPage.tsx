import React, {useEffect, useState} from 'react';
import './AlgoPage.scss';
import { FaPaste } from 'react-icons/fa';

type AlgoProps = {
    name : string,
    flipEncryptDecrypt? : boolean,
    isLowerTextBoxReadonly? : boolean,
    encryptFunction : (text: string) => Promise<unknown>,
    decryptFunction? : (text: string) => Promise<unknown>,
    additionalChangeEffectDeps?: React.DependencyList
}

export default function AlgoPageWithProps(props : React.PropsWithChildren<AlgoProps>) {
    const flipEncryptDecrypt = props.flipEncryptDecrypt || false;
    const additionalDeps = props.additionalChangeEffectDeps || [];

    const [encoded, setEncoded] = useState('');
    const [decoded, setDecoded] = useState('');

    const [performDecryption, setPerformDecryption] = useState(true);



    const handleEncodedTextboxChange = event => {
        setPerformDecryption(true);
        setEncoded(event.target.value);
    };

    const handleDecodedTextboxChange = event => {
        setPerformDecryption(false);
        setDecoded(event.target.value);
    };

    const decrypt = () => {
        if(props.decryptFunction){
            props.decryptFunction(encoded)
                .then((result) => setDecoded(String(result)));
        }
    }

    const encrypt = () => {
        props.encryptFunction(decoded)
            .then((result) => setEncoded(String(result)));
    }

    const copyToClipboard = () => {
        //todo: Clipboard and Toast
    };

    useEffect(() => {
        if (performDecryption) {
            decrypt();
        } else {
            encrypt();
        }
    }, [encoded, decoded, performDecryption, ...additionalDeps])

    return (
        <div className='container algo-page'>
            <div className="form-element">
                <label htmlFor="upperTB">{flipEncryptDecrypt ? "Decoded" : "Encoded"}</label>
                <textarea value={flipEncryptDecrypt ? decoded : encoded} 
                    onChange={flipEncryptDecrypt ? handleDecodedTextboxChange : handleEncodedTextboxChange} id='upperTB'/>
            </div>
            <div className="space-between form-element">
                { props.children }
            </div>
            <div className="form-element">
                <label htmlFor="lowerTB">{flipEncryptDecrypt ? "Encoded" : "Decoded"}</label>
                <div className="input-container">
                    <textarea value={flipEncryptDecrypt ? encoded : decoded} readOnly={props.isLowerTextBoxReadonly ? true : false}
                        onChange={flipEncryptDecrypt ? handleEncodedTextboxChange : handleDecodedTextboxChange} id='lowerTB'/>
                    {/*<div className="clipboard" onClick={copyToClipboard}>
                        <FaPaste/>
                    </div>*/}
                </div>
            </div>
        </div>
    );

}