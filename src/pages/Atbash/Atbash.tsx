import {invoke} from '@tauri-apps/api/tauri';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import React, { FC } from 'react';
import './Atbash.scss';

interface AtbashProps {}

const Atbash: FC<AtbashProps> = () => {
  const encrypt = (text: string) => invoke('atbasch_ecode_decode', {text: text})

  const decrypt = (text: string) => invoke('atbasch_ecode_decode', {text: text})

  return (
      <div data-testid="Atbash">
          <AlgoPageWithProps name='Atbash' encryptFunction={encrypt} decryptFunction={decrypt}>
          </AlgoPageWithProps>
      </div>
  );
}

export default Atbash;
