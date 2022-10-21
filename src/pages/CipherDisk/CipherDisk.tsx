import {invoke} from '@tauri-apps/api/tauri';
import React, {FC, useState} from 'react';
import Slider from 'react-input-slider';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import './CipherDisk.scss';

interface CipherDiskProps {}

const CipherDisk: FC<CipherDiskProps> = () => {
  const [shift, setShift] = useState(5);

  const handleNumberSliderChange = (x) => {
      setShift(x);
  }

  const encrypt = (text: string) => invoke('cipher_disk_encrypt', {text: text, key: Number(shift)})

  const decrypt = (text: string) => invoke('cipher_disk_decrypt', {text: text, key: Number(shift)})

  return (
      <div data-testid="CipherDisk">
          <AlgoPageWithProps name='CipherDisk' encryptFunction={encrypt} decryptFunction={decrypt} additionalChangeEffectDeps={[shift]}>
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

export default CipherDisk;
