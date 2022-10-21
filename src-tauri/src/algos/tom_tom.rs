use bimap::{BiHashMap, BiMap};
use tauri::{command};

fn create_map() -> BiHashMap<&'static str, &'static str> {
    let mut tom_elements = BiMap::new();

// insert chemicals and their corresponding symbols
    tom_elements.insert("A","/");
    tom_elements.insert("B","//");
    tom_elements.insert("C","///");
    tom_elements.insert("D","////");
    tom_elements.insert("E","/\\");
    tom_elements.insert("F","//\\");
    tom_elements.insert("G","///\\");
    tom_elements.insert("H","/\\\\");
    tom_elements.insert("I","/\\\\\\");
    tom_elements.insert("J","\\/");
    tom_elements.insert("K","\\\\/");
    tom_elements.insert("L","\\\\\\/");
    tom_elements.insert("M","\\//");
    tom_elements.insert("N","\\///");
    tom_elements.insert("O","/\\/");
    tom_elements.insert("P","//\\/");
    tom_elements.insert("Q","/\\\\/");
    tom_elements.insert("R","/\\//");
    tom_elements.insert("S","\\/\\");
    tom_elements.insert("T","\\\\/\\");
    tom_elements.insert("U","\\//\\");
    tom_elements.insert("V","\\/\\\\");
    tom_elements.insert("W","//\\\\");
    tom_elements.insert("X","\\\\//");
    tom_elements.insert("Y","\\/\\/");
    tom_elements.insert("Z","/\\/\\");

    return tom_elements;
}

#[command]
pub fn tom_tom_decrypt(input : String) -> String{
    let mut result = String::new();
    let map = create_map();

    for split in input.split_ascii_whitespace() {
        match map.get_by_right(split) {
            Some(s) => {
                result.push_str(s);
            }
            None => {
                result.push_str(split);
            }
        }
    }
    return result;
}

#[command]
pub fn tom_tom_encrypt(input : String) -> String{
    let mut result = String::new();
    let map = create_map();

    for char in input.to_ascii_uppercase().chars() {
        match map.get_by_left(char.to_string().as_str()) {
            Some(s) => {
                result.push_str(s);
            }
            None => {
                result.push_str(char.to_string().as_str());
            }
        }
        result.push_str(" ");
    }
    return result;
}