function getOtp(){
    let otp = "";
    for(let i=0; i<6; i++){
        otp = otp + Math.floor(Math.random()*10);
    }
    return otp;
}
console.log(getOtp());