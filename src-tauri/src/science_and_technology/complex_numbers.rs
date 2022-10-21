use std::collections::HashMap;
use tauri::{command};

#[command]
pub fn complex_cartesian_to_polar(a:f64, b:f64) -> HashMap<String,String> {
    let mut result = HashMap::new();
    let pi = std::f64::consts::PI;

    let r = f64::sqrt(a*a+b*b);
    let mut phi;
    if a==0.0 && b==0.0 {
        phi = 0.0;
    }else if (a>0.0) && (b>=0.0){
        phi = f64::atan(b/a);
    }else if (a>0.0) && (b<0.0) {
        phi = f64::atan(b/a) + 2.0*pi;
    }else if a<0.0 {
        phi = f64::atan(b/a) + pi;
    }else if (a==0.0) && (b>0.0) {
        phi = pi/2.0;
    }else {
        phi = 3.0 * pi / 2.0;
    }

    phi = phi * 180.0 / pi;

    result.insert("radius".to_string(),
                  format!("{}",r).to_string());

    result.insert("phi".to_string(),
                  format!("{}",phi).to_string());

    return result;
}

#[command]
pub fn complex_polar_to_cartesian(radius:f64, angle:f64) -> HashMap<String,String> {
    let mut result = HashMap::new();
    let pi = std::f64::consts::PI;

    let a = radius * f64::cos(angle * pi / 180.0);
    let b = radius * f64::sin(angle * pi / 180.0);

    result.insert("a".to_string(),
                  format!("{}",a).to_string());

    result.insert("b".to_string(),
                  format!("{}",b).to_string());

    return result;
}