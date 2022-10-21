use radix_fmt::radix;
use tauri::{command};


#[command] //max values for x and y are [2,36]
pub fn convert_from_base_x_to_base_y(base_x:u32, base_y:u8, input:&str) -> String {
    let mut result = String::new();
    for value in input.split_ascii_whitespace() {
        let dec = usize::from_str_radix(value,base_x);
        match dec {
            Ok(n) => {result.push_str(format!("{}",radix(n,base_y)).as_str());
                result.push_str(" ");}
            Err(_) => {result.push_str("? ");}
        }
    }
    return result;
}