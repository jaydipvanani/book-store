let generateotp = () =>{
    let number = '';
for (let i = 0; i < 4; i++) {
  number += Math.floor(Math.random() * 10);
}
 number


}

let otp = `
this is otp ${generateotp()}`


module.exports = otp