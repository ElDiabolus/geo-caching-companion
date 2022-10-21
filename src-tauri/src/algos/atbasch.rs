use tauri::{command};

const PLAIN: &str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CIPHER: &str = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

#[command]
pub fn atbasch_ecode_decode(text:String) -> String {
    let mut result = String::new();
    for char in text.to_ascii_uppercase().chars() {
        let pos = PLAIN.chars().position(|c| c == char);
        match pos {
            Some(pos) => {
                match CIPHER.chars().nth(pos) {
                    Some(c) => result.push(c),
                    _ => {result.push(char)}
                }
            },
            _ => result.push(char),
        }
    }
    return result;
}