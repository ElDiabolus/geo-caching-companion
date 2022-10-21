import {invoke} from '@tauri-apps/api/tauri';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import React, { FC } from 'react';
import './FoxCode.scss';

interface FoxCodeProps {}

const FoxCode: FC<FoxCodeProps> = () => {
  const encrypt = (text: string) => invoke('fox_encrypt', {text: text})

  const decrypt = (text: string) => invoke('fox_decrypt', {text: text})

  return (
      <div data-testid="FoxCode">
          <AlgoPageWithProps name='FoxCode' encryptFunction={encrypt} decryptFunction={decrypt}>
          </AlgoPageWithProps>
      </div>
  );
}

export default FoxCode;
