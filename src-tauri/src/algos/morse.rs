use bimap::{BiHashMap, BiMap};
use tauri::{command};


fn create_map() -> BiHashMap<&'static str, &'static str> {
    let mut morse_elements = BiMap::new();

    morse_elements.insert("A",".-");
    morse_elements.insert("B","-...");
    morse_elements.insert("C","-.-.");
    morse_elements.insert("D","-..");
    morse_elements.insert("E",".");
    morse_elements.insert("F","..-.");
    morse_elements.insert("G","--.");
    morse_elements.insert("H","....");
    morse_elements.insert("I","..");
    morse_elements.insert("J",".---");
    morse_elements.insert("K","-.-");
    morse_elements.insert("L",".-..");
    morse_elements.insert("M","--");
    morse_elements.insert("N","-.");
    morse_elements.insert("O","---");
    morse_elements.insert("P",".--.");
    morse_elements.insert("Q","--.-");
    morse_elements.insert("R",".-.");
    morse_elements.insert("S","...");
    morse_elements.insert("T","-");
    morse_elements.insert("U","..-");
    morse_elements.insert("V","...-");
    morse_elements.insert("W",".--");
    morse_elements.insert("X","-..-");
    morse_elements.insert("Y","-.--");
    morse_elements.insert("Z","--..");

    morse_elements.insert("1",".----");
    morse_elements.insert("2","..---");
    morse_elements.insert("3","...--");
    morse_elements.insert("4","....-");
    morse_elements.insert("5",".....");
    morse_elements.insert("6","-....");
    morse_elements.insert("7","--...");
    morse_elements.insert("8","---..");
    morse_elements.insert("9","----.");
    morse_elements.insert("0","-----");

    morse_elements.insert("Ä",".-.-");
    morse_elements.insert("Ü","..--");
    morse_elements.insert("Ö","---.");

    return morse_elements;
}

#[command]
pub fn morse_decrypt(input : String) -> String{
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
pub fn morse_encrypt(input : String) -> String{
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