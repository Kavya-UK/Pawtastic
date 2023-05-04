export const required = (value, formValue, name) => {

  return value ? undefined:`Please enter ${name}`;
};


export const isConfirmPassword = (value, formValue) => {
    if(!value){
      return `Please enter Confirm password`;
    } else if (value !== formValue.password) {
      return "Confirm password should match"
    }
    return undefined;
  
};
export const isFutureData = (value, formValue, name) => {
    if(!value){
      return `Please enter ${name}`;
    } else {
     const dateObj = new Date(value);

     const currentDate = new Date();

     let age = currentDate.getFullYear() - dateObj.getFullYear();
     if (
       currentDate.getMonth() < dateObj.getMonth() ||
       (currentDate.getMonth() === dateObj.getMonth() &&
         currentDate.getDate() < dateObj.getDate())
     ) {
       age--;
     }
console.log("AGE".age)
     if(age < 0){
      return "Please enter a past date"
     }
     return undefined
    }
  
};
