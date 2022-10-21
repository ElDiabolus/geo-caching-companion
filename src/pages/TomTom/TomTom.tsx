import {invoke} from '@tauri-apps/api/tauri';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import React, { FC } from 'react';
import styles from './TomTom.module.scss';

interface TomTomProps {}

const TomTom: FC<TomTomProps> = () => {
  const encrypt = (text: string) => invoke('tom_tom_encrypt', {input: text})

  const decrypt = (text: string) => invoke('tom_tom_decrypt', {input: text})

  return (
      <div data-testid="TomTom">
          <AlgoPageWithProps name='TomTom' encryptFunction={encrypt} decryptFunction={decrypt}>
          </AlgoPageWithProps>
      </div>
  );
}

export default TomTom;
