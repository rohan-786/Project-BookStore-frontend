import {isEmpty} from '../utility/utility';
export const validationFun = {
    
    required : function(value) {
       return isEmpty(value) ? 'Field Required' : true; 
    },
    onlyNumber : function(value) {
      const regex = /^[0-9]+$/;
      return regex.test(value) ? true : 'Only Number are allowed';  
    },
    onlyAlphabets : function(value) {
      const regex = /^[a-zA-Z]+$/;
      return regex.test(value) ? true : 'Only alphabets are allowed';  
    },
    minLength : function(value , minLength) {
        return value.length > minLength ? true : `Entered value should be more than ${minLength}`;
    },
    maxLength : function(value , maxLength) {
        return value.length < maxLength  ? true : `Entered value should be less than ${maxLength}`; 
    },

    validateEmail : function(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email) ? true : "That looks like an invalid email (eg: abc@xyz.com)";
    }

}