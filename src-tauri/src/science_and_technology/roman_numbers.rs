use regex::{Regex};
use tauri::{command};

struct RomanBasisNumber {
    roman:&'static str,
    value:u32
}

struct RomanSubtractionRule {
    without_subtraction:&'static str,
    with_subtration:&'static str
}

fn create_roman_map() -> Vec<RomanBasisNumber> {
    return vec![
        RomanBasisNumber{roman: "M", value: 1000 },
        RomanBasisNumber{roman: "D", value: 500 },
        RomanBasisNumber{roman: "C", value: 100 },
        RomanBasisNumber{roman: "L", value: 50 },
        RomanBasisNumber{roman: "X", value: 10 },
        RomanBasisNumber{roman: "V", value: 5 },
        RomanBasisNumber{roman: "I", value: 1 },
    ];
}

fn create_subtraction_map() -> Vec<RomanSubtractionRule> {
    return vec![
        RomanSubtractionRule{ without_subtraction: "DCCCC", with_subtration: "CM" },
        RomanSubtractionRule{ without_subtraction: "CCCC", with_subtration: "CD" },
        RomanSubtractionRule{ without_subtraction: "LXXXX", with_subtration: "XC" },
        RomanSubtractionRule{ without_subtraction: "XXXX", with_subtration: "XL" },
        RomanSubtractionRule{ without_subtraction: "VIIII", with_subtration: "IX" },
        RomanSubtractionRule{ without_subtraction: "IIII", with_subtration: "IV" },
    ];
}

#[command]
pub fn roman_numbers_encode(mut input:u32, use_subtraction: bool) -> String {
    let mut result = String::new();
    let roman_map = create_roman_map();
    for value in roman_map {
        while input >= value.value {
            result.push_str(value.roman);
            input = input - value.value;
        }
    }
    if use_subtraction == true {
        let sub_map = create_subtraction_map();
        for value in sub_map {
            result = result.replace(value.without_subtraction, value.with_subtration);
        }
    }
    return result;
}

#[command]
pub fn roman_numbers_decode(mut input:String) -> String {
    let re = Regex::new(r"[^MDCLXVI]").unwrap();
    input = re.replace_all(&input.to_uppercase(), "" ).to_string();

    let sub_map = create_subtraction_map();
    for value in sub_map {
        input = input.replace(value.with_subtration, value.without_subtraction);
    }

    let roman_map = create_roman_map();
    let mut sum = 0;
    for c in input.split("") {
        sum = sum + get_value_from(&roman_map,c);
    }

    return sum.to_string();
}

#[command]
pub fn roman_numbers_chronogram(mut input:String, is_j_u_to_i_v:bool, is_y_to_ii:bool, is_w_to_vv:bool) -> String {
    input = input.to_uppercase();
    if is_j_u_to_i_v == true {
        input = input.replace("J","I");
        input = input.replace("U","V");
    }
    if is_y_to_ii == true {
        input = input.replace("Y","II");
    }
    if is_w_to_vv == true {
        input = input.replace("W","VV");
    }
    return roman_numbers_decode(input);
}

fn get_value_from(vector:&Vec<RomanBasisNumber>, input:&str) -> u32 {
    for v in vector {
        if v.roman.eq(input) {
            return v.value;
        }
    }
    return 0;
}

