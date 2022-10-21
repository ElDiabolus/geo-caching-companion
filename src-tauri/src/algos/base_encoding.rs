use tauri::{command};

#[command]
pub fn base16_encode(text:String) -> String {
    let result = base16::encode_upper(text.as_bytes());
    return result;
}

#[command]
pub fn base16_decode(text:String) -> String {
    let mut result = String::new();
    let result_vec = base16::decode(text.as_bytes());
    match result_vec {
        Ok(r) => {result = convert_to_utf8(r)}
        Err(_) => {}
    }
    return result;
}

#[command]
pub fn base32_encode(text:String) -> String {
    let result = base32::encode(base32::Alphabet::RFC4648 { padding: false }, text.as_bytes());
    return result;
}

#[command]
pub fn base32_decode(text:String) -> String {
    let mut result = String::new();
    let result_vec = base32::decode(base32::Alphabet::RFC4648 { padding: false }, &*text);
    match result_vec {
        Some(r) => {result = convert_to_utf8(r)},
        _ => {}
    }
    return result;
}

#[command]
pub fn base64_encode(text:String) -> String {
    let result = base64::encode(text);
    return result;
}

#[command]
pub fn base64_decode(text:String) -> String {
    let mut result = String::new();
    let result_vec = base64::decode(text);
    match result_vec {
        Ok(r) => {result = convert_to_utf8(r)}
        Err(_) => {}
    }
    return result;
}

#[command]
pub fn base91_encode(text:String) -> String {
    let result = base91::EncodeIterator::new(text.bytes()).as_char_iter().collect();
    return result;
}

#[command]
pub fn base91_decode(text:String) -> String {
    let result_vec = base91::DecodeIterator::new(text.bytes()).collect();
    return convert_to_utf8(result_vec);
}

fn convert_to_utf8(vector:Vec<u8>) -> String {
    let mut result = String::new();
    match String::from_utf8(vector) {
        Ok(r) => {result = r}
        Err(_) => {}
    }
    return result;
}