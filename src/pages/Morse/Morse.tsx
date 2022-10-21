import {invoke} from '@tauri-apps/api/tauri';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import React, { FC } from 'react';
import styles from './Morse.module.scss';

interface MorseProps {}

const Morse: FC<MorseProps> = () => {
  const encrypt = (text: string) => invoke('morse_encrypt', {input: text})

  const decrypt = (text: string) => invoke('morse_decrypt', {input: text})

  return (
      <div data-testid="Morse">
          <AlgoPageWithProps name='Morse' encryptFunction={encrypt} decryptFunction={decrypt}>
          </AlgoPageWithProps>
      </div>
  );
}

export default Morse;
