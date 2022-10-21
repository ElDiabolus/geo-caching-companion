use itertools::Itertools;
use regex::{Captures, Regex};
use tauri::{command};

pub const ALPHABET_DEFAULT: &str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
pub const ALPHABET_GERMAN: &str =  "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß";

pub fn create_shifted_alphabet<S: Into<String>>(alphabet: S, shift: usize) -> String {
    let alphabet_string = alphabet.into();
    let mut char_vec = alphabet_string.chars().collect_vec();
    char_vec.rotate_left( shift % alphabet_string.chars().count());
    char_vec.into_iter().collect()
}

pub fn translate_between_alphabets(text: String, original_alphabet: String, new_alphabet: String) -> String {
    text.chars().map(|x| {
        original_alphabet.chars()
            .position(|y| y == x.to_uppercase().nth(0).unwrap())
            .map_or(x, |y| {
                if x.is_lowercase(){
                    new_alphabet.chars().nth(y).unwrap().to_ascii_lowercase()
                }
                else {
                    new_alphabet.chars().nth(y).unwrap()
                }
            })
    }).collect()
}


#[command]
pub fn alphabet_value_decrypt(text: String, zero_included: bool) -> String {
    let alphabet = ALPHABET_DEFAULT;
    let re = Regex::new(r"\d{1,2}|\s").unwrap();

    let result = re.replace_all(&text,move |caps: &Captures| {
        let capture = &caps[0].trim();

        let replacement = match capture.parse::<i32>() {
            Ok(n) => alphabet.chars().nth(if zero_included {n} else {n - 1} as usize).map_or("".to_string(), |x| x.to_string()),
            Err(_) => "".to_string()
        };

        replacement
    });

    result.to_string()
}

#[command]
pub fn alphabet_value_encrypt(text: String, zero_included: bool) -> String {
    let alphabet = ALPHABET_DEFAULT;
    let re = Regex::new(r".").unwrap();

    let text_string = text.to_uppercase();

    let result = re.replace_all(&text_string,move |caps: &Captures| {
        let capture = &caps[0];
        let replacement = alphabet.chars().position(|x| x.to_string() == capture).map_or(
            capture.to_string(),
            |x| format!("{} ", (if zero_included {x} else {x + 1}).to_string())
        );

        replacement
    });

    result.to_string()
}
