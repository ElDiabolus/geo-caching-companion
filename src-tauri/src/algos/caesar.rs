use tauri::{command};
use crate::algos::alphabet_values::{ALPHABET_DEFAULT, create_shifted_alphabet, translate_between_alphabets};

#[command]
pub fn caesar_decrypt(text: String, shift: u8) -> String {
    translate_between_alphabets(text,
                                create_shifted_alphabet(ALPHABET_DEFAULT,shift as usize),
                                ALPHABET_DEFAULT.to_string())
}

#[command]
pub fn caesar_encrypt(text: String, shift: u8) -> String {
    translate_between_alphabets(text,
                                ALPHABET_DEFAULT.to_string(),
                                create_shifted_alphabet(ALPHABET_DEFAULT,shift as usize))
}

