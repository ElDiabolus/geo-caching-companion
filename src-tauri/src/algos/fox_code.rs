use bimap::{BiHashMap, BiMap};
use tauri::{command};
use regex::{Captures, Regex};


fn create_map() -> BiHashMap<&'static str, &'static str> {
    let mut fox_elements = BiMap::new();

// insert chemicals and their corresponding symbols
    fox_elements.insert("11", "A");
    fox_elements.insert("12", "B");
    fox_elements.insert("13", "C");
    fox_elements.insert("14", "D");
    fox_elements.insert("15", "E");
    fox_elements.insert("16", "F");
    fox_elements.insert("17", "G");
    fox_elements.insert("18", "H");
    fox_elements.insert("19", "I");

    fox_elements.insert("21", "J");
    fox_elements.insert("22", "K");
    fox_elements.insert("23", "L");
    fox_elements.insert("24", "M");
    fox_elements.insert("25", "N");
    fox_elements.insert("26", "O");
    fox_elements.insert("27", "P");
    fox_elements.insert("28", "Q");
    fox_elements.insert("29", "R");

    fox_elements.insert("31", "S");
    fox_elements.insert("32", "T");
    fox_elements.insert("33", "U");
    fox_elements.insert("34", "V");
    fox_elements.insert("35", "W");
    fox_elements.insert("36", "X");
    fox_elements.insert("37", "Y");
    fox_elements.insert("38", "Z");
    fox_elements.insert("39", " ");

    fox_elements
}

#[command]
pub fn fox_decrypt(text : String) -> String{
    let re = Regex::new(r"\d{2}|\s").unwrap();

    let map = create_map();
    let result = re.replace_all(&text,move |caps: &Captures| {
        let capture = &caps[0].trim();
        let result = map.get_by_left(capture).unwrap_or(&capture);
        result.to_string()
    });

    result.to_string()
}

#[command]
pub fn fox_encrypt(text : String) -> String{
    let re = Regex::new(r".").unwrap();

    let map = create_map();
    let result = re.replace_all(&text,move |caps: &Captures| {
        let capture = &caps[0].to_uppercase();
        let capture_str = capture.as_str();
        let result = map.get_by_right(capture_str).unwrap_or(&capture_str);
        format!("{} ", result.to_string())
    });

    result.to_string()
}