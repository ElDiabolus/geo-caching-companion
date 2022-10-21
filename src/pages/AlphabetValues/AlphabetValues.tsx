import {invoke} from '@tauri-apps/api/tauri';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import React, { FC, useState } from 'react';
import './AlphabetValues.scss';

interface AlphabetValuesProps {}

const AlphabetValues: FC<AlphabetValuesProps> = () =>  {
  const [includeZero, setIncludeZero] = useState(false);

  const encrypt = (text: string) => invoke('alphabet_value_encrypt', {text: text, zeroIncluded: includeZero})

  const decrypt = (text: string) => invoke('alphabet_value_decrypt', {text: text, zeroIncluded: includeZero})

  return (
      <div data-testid="AlphabetValues">
          <AlgoPageWithProps name='AlphabetValues' encryptFunction={encrypt} decryptFunction={decrypt} additionalChangeEffectDeps={[includeZero]}>
              <div className="besides">
                  <span className="switchLabel">Include Zero</span>
                  <label className="switch">
                      <input type="checkbox" checked={includeZero} onChange={(e) => setIncludeZero(e.target.checked)}/>
                      <span className="slider round"/>
                  </label>
              </div>
          </AlgoPageWithProps>
      </div>
  );
}


export default AlphabetValues;
