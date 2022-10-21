use std::collections::HashMap;
use tauri::{command};

#[command]
pub fn quadratic_equation(a:f64, b:f64, c:f64) -> HashMap<String,String> {
    let mut result = HashMap::new();

    if a == 0.0 {
        return line_equation(b,c);
    }else{
        if b*b-4.0*a*c < 0.0 {
            return complex_equation(a,b,c);
        }else {
            let x1 = (-b + f64::sqrt(b*b-4.0*a*c)) / (2.0 * a);
            let x2 = (-b - f64::sqrt(b*b-4.0*a*c)) / (2.0 * a);
            result.insert("x1".to_string(),
                          format!("{:.5}",x1).to_string());
            result.insert("x2".to_string(),
                          format!("{:.5}",x2).to_string());
        }
    }

    return result;
}

fn line_equation(b:f64, c:f64) -> HashMap<String,String> {
    let mut result = HashMap::new();

    if b == 0.0 {
        result.insert("x1".to_string(),
                      "".to_string());
        result.insert("x2".to_string(),
                      "".to_string());
    }else{
        if c == 0.0 {
            result.insert("x1".to_string(),
                          format!("{:.5}",0.0).to_string());
            result.insert("x2".to_string(),
                          "".to_string());
        }else {
            let x = -c / b;
            result.insert("x1".to_string(),
                          format!("{}",x).to_string());
            result.insert("x2".to_string(),
                          "".to_string());
        }
    }
    return result;
}

fn complex_equation(a:f64, b:f64, c:f64) -> HashMap<String,String> {
    let mut result = HashMap::new();

    let x1_real = -b / (2.0*a);
    let x1_im   = f64::sqrt(4.0*a*c-b*b)/(2.0*a);
    let x1 = format!("{real:.5} + i {im:.5}",real=x1_real,im=x1_im);
    let x2 = format!("{real:.5} - i {im:.5}",real=x1_real,im=x1_im);

    result.insert("x1".to_string(),
                  x1);
    result.insert("x2".to_string(),
                  x2);
    return result;
}