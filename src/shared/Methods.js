import Banks from '../banks';


export const LOGGER = (key, value) => {
    console.log(key.toUpperCase(), value);
};

export const BANKS = () => {
  let Bank = [];
  Banks.forEach((item) => {
      Bank.push(item.name);
  });
  return Bank;
};

export const MONTHNUMBER = () => {
    let MonthNum = [];
    for(let i = 1;  i < 32; i++){
        MonthNum.push(i);
    }
    return MonthNum;
};

export const GENDER = () => {
    return ["Male", "Female"];
};

export const MONTH = () => {
    return [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
};

export const YEAR = () => {
  let YEAR = [];
  for(let i = 1922; i < 2020; i++){
      YEAR.push(i);
  }
  return YEAR;
};
export const FEET = () => {
    let feetVal = [];
    for(let i = 0; i <= 10; i++) {
        feetVal.push(i);
    }
};
export const INCHES = () => {
    let inchVal = [];
    for(let i = 0; i <= 12; i++) {
        inchVal.push(i);
    }
};
export const THUMBNAIL_PRODUCT = (val) => {
    return val.replace('http', 'https').replace('upload', 'upload/f_auto,h_500');
};

export const LOGO_IMAGES = (val) => val.replace('http', 'https').replace('upload', 'upload/f_auto,h_200');

export const QUICK_BUY_PRODUCT = val => val.replace('http', 'https').replace('upload', 'upload/f_auto,h_460');

export const COLOR_PICTURE = (val) => val.replace('http', 'https').replace('upload', 'upload/f_auto,h_50');

export const SNIPPET_PICTURE = val => val.replace('http', 'https').replace('upload', 'upload/f_auto,h_70');

export const numberWithCommas = (x) => {
    if (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};

export const TO_UPPERCASE = value => value ? value.toUpperCase() : null;
