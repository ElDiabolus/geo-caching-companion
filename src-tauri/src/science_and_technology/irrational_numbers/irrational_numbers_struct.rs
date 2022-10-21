use tauri::{command};
use crate::science_and_technology::irrational_numbers::euler::EULER;
use crate::science_and_technology::irrational_numbers::pi::PI;

//const MAX_VALUE :i32 = 1000000;

pub struct IrrationalNumber {
    pub symbol: &'static str,
    pub integer_part: &'static str,
    pub decimal_part: &'static str,
}

impl IrrationalNumber {
    pub fn decimal_range(&self, start:usize, end:usize) -> &str {
        match self.decimal_part.get(start..end+1)
        {
            None => { return "?" }
            Some(s) => { return s }
        }
    }
    pub fn decimal_occurrence(&self, pattern: &str) -> usize {
        match self.decimal_part.find(pattern)
        {
            Some(index) => return index,
            None    => return usize::MIN,
        }
    }
}

//TAURI FUNCTIONS

#[command]
pub fn euler_decimal_at(index:usize) -> &'static str {
    return EULER.decimal_range(index,index+1);
}
#[command]
pub fn euler_decimal_range(start:usize,end:usize) -> &'static str {
    return EULER.decimal_range(start,end);
}
#[command]
pub fn euler_decimal_occurrence(pattern: &str) -> usize {
    return EULER.decimal_occurrence(pattern);
}

#[command]
pub fn pi_decimal_at(index:usize) -> &'static str {
    return PI.decimal_range(index,index+1);
}
#[command]
pub fn pi_decimal_range(start:usize,end:usize) -> &'static str {
    return PI.decimal_range(start,end);
}
#[command]
pub fn pi_decimal_occurrence(pattern: &str) -> usize {
    return PI.decimal_occurrence(pattern);
}
