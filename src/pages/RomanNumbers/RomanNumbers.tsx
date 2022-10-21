import {invoke} from '@tauri-apps/api/tauri';
import React, {FC, useState} from 'react';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import styles from './RomanNumbers.module.scss';

interface RomanNumbersProps {}

const RomanNumbers: FC<RomanNumbersProps> = () => {
  const [useSubtractionRule, setUseSubtractionRule] = useState(false);

  const encrypt = (text: string) => invoke('roman_numbers_encode', {input: Number(text), useSubtraction: useSubtractionRule})

  const decrypt = (text: string) => invoke('roman_numbers_decode', {input: text})

  return (
      <div data-testid="RomanNumbers">
          <AlgoPageWithProps name='RomanNumbers' encryptFunction={encrypt} decryptFunction={decrypt} additionalChangeEffectDeps={[useSubtractionRule]}>
              <div className="besides">
                  <span className="switchLabel">Use Subtraction Rule</span>
                  <label className="switch">
                      <input type="checkbox" checked={useSubtractionRule} onChange={(e) => setUseSubtractionRule(e.target.checked)}/>
                      <span className="slider round"/>
                  </label>
              </div>
          </AlgoPageWithProps>
      </div>
  );

}

export default RomanNumbers;
