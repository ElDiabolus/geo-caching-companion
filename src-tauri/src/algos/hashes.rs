use sha1::digest::core_api::CoreWrapper;
use sha1::{Digest, Sha1, Sha1Core};
use sha1::digest::{FixedOutput, HashMarker, Update};
use sha2::digest::core_api::CtVariableCoreWrapper;
use sha2::{Sha224, Sha256, Sha256VarCore, Sha384, Sha512, Sha512VarCore};
use sha3::{Keccak224, Keccak224Core, Keccak256, Keccak256Core, Keccak384, Keccak384Core, Keccak512, Keccak512Core, Sha3_224, Sha3_224Core, Sha3_256, Sha3_256Core, Sha3_384, Sha3_384Core, Sha3_512, Sha3_512Core};
use tauri::{command};

//general function for hashing
fn convert<T>(mut hasher: T, input:String) -> String  where T: Default, T: FixedOutput, T: HashMarker, T: Update {
    let mut result = String::new();
    hasher.update(input.as_bytes());
    let hash_result = &hasher.finalize()[..];
    for v in hash_result {
        result.push_str(format!{"{:02x}", v}.as_str())
    }
    return result;
}

#[command]//MD5
pub fn md5_encode(input:String) -> String {
    let hash_result = md5::compute(input.as_bytes());
    return format!{"{:x}", hash_result};
}

#[command]//SHA-1 160 224 256 384 512
pub fn sha_160_encode(input:String) -> String {
    let hasher = Sha1::new();
    return convert::<CoreWrapper<Sha1Core>>(hasher,input);
}
#[command]
pub fn sha_224_encode(input:String) -> String {
    let hasher = Sha224::new();
    return convert::<CoreWrapper<CtVariableCoreWrapper<Sha256VarCore, _>>>(hasher, input);
}
#[command]
pub fn sha_256_encode(input:String) -> String {
    let hasher = Sha256::new();
    return convert::<CoreWrapper<CtVariableCoreWrapper<Sha256VarCore, _>>>(hasher, input);
}
#[command]
pub fn sha_384_encode(input:String) -> String {
    let hasher = Sha384::new();
    return convert::<CoreWrapper<CtVariableCoreWrapper<Sha512VarCore, _>>>(hasher, input);
}
#[command]
pub fn sha_512_encode(input:String) -> String {
    let hasher = Sha512::new();
    return convert::<CoreWrapper<CtVariableCoreWrapper<Sha512VarCore, _>>>(hasher, input);
}

//SHA-3 224 256 384 512
#[command]
pub fn sha3_224_encode(input:String) -> String {
    let hasher = Sha3_224::new();
    return convert::<CoreWrapper<Sha3_224Core>>(hasher, input);
}
#[command]
pub fn sha3_256_encode(input:String) -> String {
    let hasher = Sha3_256::new();
    return convert::<CoreWrapper<Sha3_256Core>>(hasher, input);
}
#[command]
pub fn sha3_384_encode(input:String) -> String {
    let hasher = Sha3_384::new();
    return convert::<CoreWrapper<Sha3_384Core>>(hasher, input);
}
#[command]
pub fn sha3_512_encode(input:String) -> String {
    let hasher = Sha3_512::new();
    return convert::<CoreWrapper<Sha3_512Core>>(hasher, input);
}

//Keccak in SHA3 -> 224 256 384 512
#[command]
pub fn keccak_224_encode(input:String) -> String {
    let hasher = Keccak224::new();
    return convert::<CoreWrapper<Keccak224Core>>(hasher, input);
}
#[command]
pub fn keccak_256_encode(input:String) -> String {
    let hasher = Keccak256::new();
    return convert::<CoreWrapper<Keccak256Core>>(hasher, input);
}
#[command]
pub fn keccak_384_encode(input:String) -> String {
    let hasher = Keccak384::new();
    return convert::<CoreWrapper<Keccak384Core>>(hasher, input);
}
#[command]
pub fn keccak_512_encode(input:String) -> String {
    let hasher = Keccak512::new();
    return convert::<CoreWrapper<Keccak512Core>>(hasher, input);
}


//Shake 128 256

