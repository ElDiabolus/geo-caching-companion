import {invoke} from '@tauri-apps/api/tauri';
import AlgoPageWithProps from '../../components/GenericAlgo/AlgoPage';
import React, { FC, useState } from 'react';
import styles from './Hash.module.scss';

interface HashProps {}

const Hash: FC<HashProps> = () => {
  const [hashAlgo, setHashAlgo] = useState("md5");

  const encrypt = (text: string) => invoke(hashAlgo + '_encode', {input: text})

  return (
      <div data-testid="Hash">
          <AlgoPageWithProps name='Hash' encryptFunction={encrypt} flipEncryptDecrypt={true} isLowerTextBoxReadonly={true}
                             additionalChangeEffectDeps={[hashAlgo]}>
              <span>Base Algorithm:</span>

              <label className="select-box">
                  <select name="hash-algos" id="hash-algos" onChange={e => setHashAlgo(e.target.value)} defaultValue={hashAlgo}>
                      <option value="md5">MD5</option>

                      <option value="sha_160">SHA-1</option>
                      <option value="sha_224">SHA2-224</option>
                      <option value="sha_256">SHA2-256</option>
                      <option value="sha_384">SHA2-384</option>
                      <option value="sha_512">SHA2-512</option>

                      <option value="sha3_224">SHA3-224</option>
                      <option value="sha3_256">SHA3-256</option>
                      <option value="sha3_384">SHA3-384</option>
                      <option value="sha3_512">SHA3-512</option>

                      <option value="keccak_224">Keccak-224</option>
                      <option value="keccak_256">Keccak-256</option>
                      <option value="keccak_384">Keccak-384</option>
                      <option value="keccak_512">Keccak-512</option>
                  </select>
              </label>
          </AlgoPageWithProps>
      </div>
  );
}

export default Hash;
