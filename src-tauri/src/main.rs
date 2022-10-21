#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

use crate::algos::caesar::{caesar_decrypt, caesar_encrypt};
use crate::algos::fox_code::{fox_decrypt, fox_encrypt};
use crate::algos::alphabet_values::{alphabet_value_decrypt, alphabet_value_encrypt};
use crate::algos::base_encoding::{base16_encode, base16_decode, base32_encode, base32_decode,
                                  base64_encode, base64_decode, base91_encode, base91_decode};
use crate::algos::atbasch::{atbasch_ecode_decode};
use crate::algos::cipher_disk::{cipher_disk_decrypt, cipher_disk_encrypt};
use crate::algos::hashes::{md5_encode, sha_160_encode, sha_224_encode, sha_256_encode, sha_384_encode, sha_512_encode,
                           sha3_224_encode, sha3_256_encode, sha3_384_encode, sha3_512_encode,
                           keccak_224_encode, keccak_256_encode, keccak_384_encode, keccak_512_encode};
use crate::algos::tom_tom::{tom_tom_encrypt,tom_tom_decrypt};
use crate::algos::morse::{morse_encrypt,morse_decrypt};


pub mod algos;

pub mod science_and_technology;
use crate::science_and_technology::irrational_numbers::irrational_numbers_struct::
        {euler_decimal_at, euler_decimal_range, euler_decimal_occurrence,
        pi_decimal_at, pi_decimal_range, pi_decimal_occurrence};
use crate::science_and_technology::quadratic_equation::{quadratic_equation};
use crate::science_and_technology::complex_numbers::{complex_cartesian_to_polar,complex_polar_to_cartesian};
use crate::science_and_technology::base_converter::convert_from_base_x_to_base_y;
use crate::science_and_technology::roman_numbers::{roman_numbers_encode, roman_numbers_decode, roman_numbers_chronogram};

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![
          caesar_decrypt,
          caesar_encrypt,
          fox_decrypt,
          fox_encrypt,
          alphabet_value_decrypt,
          alphabet_value_encrypt,
          euler_decimal_at,
          euler_decimal_range,
          euler_decimal_occurrence,
          pi_decimal_at,
          pi_decimal_range,
          pi_decimal_occurrence,
          quadratic_equation,
          complex_cartesian_to_polar,
          complex_polar_to_cartesian,
          base16_encode,
          base16_decode,
          base32_encode,
          base32_decode,
          base64_encode,
          base64_decode,
          base91_encode,
          base91_decode,
          atbasch_ecode_decode,
          cipher_disk_encrypt,
          cipher_disk_decrypt,
          convert_from_base_x_to_base_y,
          md5_encode,
          sha_160_encode,
          sha_224_encode,
          sha_256_encode,
          sha_384_encode,
          sha_512_encode,
          sha3_224_encode,
          sha3_256_encode,
          sha3_384_encode,
          sha3_512_encode,
          keccak_224_encode,
          keccak_256_encode,
          keccak_384_encode,
          keccak_512_encode,
          tom_tom_encrypt,
          tom_tom_decrypt,
          morse_encrypt,
          morse_decrypt,
          roman_numbers_encode,
          roman_numbers_decode,
          roman_numbers_chronogram,
      ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
