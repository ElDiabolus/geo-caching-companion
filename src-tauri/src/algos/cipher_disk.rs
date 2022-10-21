use tauri::{command};

const PLAIN: &str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

#[command]
pub fn cipher_disk_encrypt(text: String, key:usize) -> String {
    let mut result = String::new();

    for char in text.to_ascii_uppercase().chars() {
        let pos = PLAIN.chars().position(|c| c == char);
        match pos {
            Some(mut pos) => {
                pos = (pos + key+1)%26;
                if pos == 0 {pos = 26;}
                result.push_str(pos.to_string().as_str());
                result.push(' ');
            },
            _ => {}
        }
    }

    return result;
}

#[command]
pub fn cipher_disk_decrypt(text:String, key:usize) -> String {
    let mut result = String::new();

    let keys = text.split_ascii_whitespace();

    for s in keys {
        let pos = s.parse::<usize>();
        match pos {
            Ok(mut pos) => {
                pos = (pos + 26 - key+1) % 26;
                let char = PLAIN.chars().nth(pos);
                match char {
                    Some(c) => {result.push(c)},
                    _ => {}
                }
            }
            Err(_) => {}
        }
    }

    return result;
}
