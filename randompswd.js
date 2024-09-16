function passwordgenerator(len, includeLowercase, includeUppercase, includeNumber, includeSymbol){
    const Lowercasechar="abcdefghijklmnopqrstuvwxyz";
    const Uppercasechar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar="0123456789";
    const symbolchar="!@#$%^&*()_+=";

    let allowchar="";
    let password="";

    allowchar += includeLowercase? Lowercasechar: " ";
    allowchar += includeUppercase? Uppercasechar: " ";
    allowchar += includeNumber? numberchar: " ";
    allowchar += includeSymbol? symbolchar: " ";

    if(len<=0){
        console.log(`Password length must be at least 0`);
    }
    if(allowchar.length===0){
        console.log(`At least 1 set of Character need to be selected`);
    }
    for(let i=0 ; i<len ; i++){
        const randomIndex=Math.floor(Math.random() * allowchar.length);
        password += allowchar[randomIndex];
    }
    return password;

}
const passwordlength=12;
const includeLowercase= false;
const includeUppercase= true;
const includeNumber= true;
const includeSymbol= true;

const password=passwordgenerator(passwordlength,
                                includeLowercase,
                                includeUppercase,
                                includeNumber,
                                includeSymbol);
            
console.log(`Generated Password = ${password}`);