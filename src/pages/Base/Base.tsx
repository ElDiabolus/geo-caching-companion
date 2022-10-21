import {invoke} from '@tauri-apps/api/tauri';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import React, { FC, useState } from 'react';
import './Base.scss';

interface BaseProps {}

const Base: FC<BaseProps> = () => {
  const [baseAlgo, setBaseAlgo] = useState("base64");

  const encrypt = (text: string) => invoke(baseAlgo + '_encode', {text: text})

  const decrypt = (text: string) => invoke(baseAlgo + '_decode', {text: text})

  return (
      <div data-testid="Base">
          <AlgoPageWithProps name='Base' encryptFunction={encrypt} decryptFunction={decrypt}
                             additionalChangeEffectDeps={[baseAlgo]}>
              <span>Base Algorithm:</span>

              <label className="select-box">
                  <select name="bases" id="bases" onChange={e => setBaseAlgo(e.target.value)} defaultValue={baseAlgo}>
                      <option value="base16">Base16</option>
                      <option value="base32">Base32</option>
                      <option value="base64" selected>Base64</option>
                      <option value="base91">Base91</option>
                  </select>
              </label>
          </AlgoPageWithProps>
      </div>
  );
}

export default Base;
