function debgr(errorMessage){
    console.log(errorMessage);
}

var ChkFirstName = function(){

    var fname = document.getElementById('fname').value.trim();
    var passed = 1; 
    var fnameError = document.getElementById('fNameError');
    var CurrentStatus = document.getElementById('fNameCheking');


    fnameError.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';

    if (!fname == ''){
        if (!fname[0].search(/[A-Za-z]/)){
           
            if ( /^[A-Za-z'-]+$/.test(fname) ||  /^[A-Za-z]+$/.test(fname) ){
                fnameError.innerHTML = '';
                CurrentStatus.innerHTML = '&#10004;';
                CurrentStatus.className = 'fieldStatusNoError';
                passed = 0;
                return true;
            }
            
            if (passed != 0){
                fnameError.innerHTML = 'Only alphabetic characters, hyphen and \' are allowed';
                CurrentStatus.innerHTML = '&#x2716;';
                CurrentStatus.className = 'statEror';
                 return false;
            }
             return false;
        } else {
           
            fnameError.innerHTML = 'This field must have and start with at least one alphabetic character';
            CurrentStatus.innerHTML = '&#x2716;';
            CurrentStatus.className = 'statEror';
             return false;
        }
    }

    return false;
};


var chkLastName = function(){
    var Lname = document.getElementById('lname').value.trim();
    var passed = 1; 
    var LnameError = document.getElementById('lNameError');
    var CurrentStatus = document.getElementById('LNameCheking');


    LnameError.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';

    if (!Lname == ''){
        if (!Lname[0].search(/[a-zA-Z]/)){
            if ( /^[A-Za-z'-]+$/.test(Lname) ||  /^[A-Za-z]+$/.test(Lname) ){
                LnameError.innerHTML = '';
                CurrentStatus.innerHTML = '&#10004;';
                CurrentStatus.className = 'fieldStatusNoError';
                passed = 0;
                return true;
            }
            
            if (passed != 0){
                LnameError.innerHTML = 'Only alphabetic characters, - and \' are allowed';
                CurrentStatus.innerHTML = '&#x2716;';
                CurrentStatus.className = 'statEror';
                 return false;
            }
           
        } else {
            
            LnameError.innerHTML = 'This field must have and start with at least one alphabetic character';
            CurrentStatus.innerHTML = '&#x2716;';
            CurrentStatus.className = 'statEror';
             return false;
        }
    }

    return false;
};


function chkPassword(){
    var password =  document.getElementById('password').value.trim();
    var passwordError = document.getElementById('passError');
    var CurrentStatus = document.getElementById('PassCheking');

    passwordError.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';

  

    if (!password == ''){

        if (password.length >= 8){
            
            if( password.search(/[a-z]/) >= 0 ){

                
                if (password.search(/[A-Z]/) >= 0){

                    if (password.search(/[0-9]/) >= 0){
                        passwordError.innerHTML = '';
                        CurrentStatus.innerHTML = '&#10004;';
                        CurrentStatus.className = 'fieldStatusNoError';
                        return true;          
                    }
                    else {
                         passwordError.innerHTML = 'password must have least one digit number';
                         CurrentStatus.innerHTML = '&#x2716;';
                         CurrentStatus.className = 'statEror';
                         return false;
                    }

                }
                else {
                    passwordError.innerHTML = '  Password must contain both upper and lower case characters';
                    CurrentStatus.innerHTML = '&#x2716;';
                    CurrentStatus.className = 'statEror';
                    return false;
                }

            } 
            else {
                passwordError.innerHTML = '  Password must contain both upper and lower case characters';
                CurrentStatus.innerHTML = '&#x2716;';
                CurrentStatus.className = 'statEror';
                return false;
            }
        }
        else {
            passwordError.innerHTML = 'Password must have at least 8 characters ';
            CurrentStatus.innerHTML = '&#x2716;';
            CurrentStatus.className = 'statEror';
            return false;
        }
    }

return false;

}

function chkRetypePassword(){
    var password =  document.getElementById('password').value.trim();
    var passwordRe =  document.getElementById('repassword').value.trim();
    var passwordErrorRe = document.getElementById('passErrorRe');
    var CurrentStatus = document.getElementById('rePassCheking');

    passwordErrorRe.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';

    if (!passwordRe == ''){
         if (passwordRe == password){
            passwordErrorRe.innerHTML = '';
            CurrentStatus.innerHTML = '&#10004;';
            CurrentStatus.className = 'fieldStatusNoError';
            return true;
        } else {
            passwordErrorRe.innerHTML = 'Your passwords don\'t match';
            CurrentStatus.innerHTML = '&#x2716;';
            CurrentStatus.className = 'statEror';
        return false;
    }

    } else {
        passwordErrorRe.innerHTML = '';
        CurrentStatus.innerHTML = '';
        CurrentStatus.className = 'fieldClass';
        return false;
    }
}

function chkPhone(){

    var Phone = document.getElementById('phone').value;
    var areaCode = Phone.substr(0,3);
    var firstPart = Phone.substr(4,3);
    var SecondPart = Phone.substr(8,4);
    var firstDash = Phone.substr(3,1);
    var SecondDash = Phone.substr(7,1);
    var phoneError = document.getElementById('pError');
    var CurrentStatus = document.getElementById('telChecked');

    phoneError.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';  

    if (!Phone == '' ){
       
        if (Phone.length == 12){

           
             if (/^[0-9-]+$/.test(Phone) ){
              
                if (firstDash == '-' && SecondDash == '-'){
              
                    if (areaCode > 0 && areaCode <= 999){
              

                        if (areaCode == 0){
                            phoneError.innerHTML = 'Your phone number area code can\'t be zeroes'; 
                            CurrentStatus.innerHTML = '&#x2716;';
                            CurrentStatus.className = 'statEror';
                            return false; 
                        }                            
                            if (firstPart + SecondPart == 0){
                               
                                phoneError.innerHTML = 'Your phone number can\'t be zeroes'; 
                                CurrentStatus.innerHTML = '&#x2716;';
                                CurrentStatus.className = 'statEror';        
                                return false;
                            } else {
                                
                                phoneError.innerHTML = '';
                                CurrentStatus.innerHTML = '&#10004;';
                                CurrentStatus.className = 'fieldStatusNoError';
                                return true;
                            }
            
                    }
                    else {
                        
                        phoneError.innerHTML = 'Must be in the format of 999-999-9999 (‘9’ here means digit only)';
                        CurrentStatus.innerHTML = '&#x2716;';
                        CurrentStatus.className = 'statEror';
                    }
                    return false;
                } else {
                                
                                phoneError.innerHTML = 'Must be in the format of 999-999-9999 (‘9’ here means digit only)';
                                CurrentStatus.innerHTML = '&#x2716;';
                                CurrentStatus.className = 'statEror';
                                return false;
                        }    
            } else {
                           
                            phoneError.innerHTML = 'Must be in the format of 999-999-9999 (‘9’ here means digit only)';
                            CurrentStatus.innerHTML = '&#x2716;';
                            CurrentStatus.className = 'statEror';
                            return false;
            }
        }
        
        
        
        
        else {
            phoneError.innerHTML = 'Must be in the format of 999-999-9999 (‘9’ here means digit only)';
            CurrentStatus.innerHTML = '&#x2716;';
            CurrentStatus.className = 'statEror';
            return false;
        }
    }
    else {
        return false;
    }
}


function Education(){
    var EduStat = document.getElementsByName('EduStat');
    var EduError = document.getElementById('EduError');
    var statusChecked = false;
    EduError.innerHTML = '';
    let i = 0;
    for (; i < EduStat.length; i++){
        
        if (EduStat[i].checked){
            statusChecked = true;
        }
    }
  

    if (statusChecked){
        EduError.innerHTML = '';
    } else {
        EduError.innerHTML = 'Must select one of these menu options';
    }

   
    return statusChecked;
}

function FormValidation(){
    debgr('Functions\n' + 'ChkFirstName()' + ChkFirstName());
    debgr( 'chkLastName()' +chkLastName());
    debgr( 'chkPhone()' +chkPhone());
    debgr( 'chkPassword()' +chkPassword());
    debgr( 'chkRetypePassword()' +chkRetypePassword());
    debgr( 'Education()' +Education());

    


if(!(ChkFirstName() && chkLastName() && chkPassword() && chkRetypePassword() && chkPhone() &&  Education()))
	{
        return false;
		
	}
	else
	{
		return true;
	}
}

var clearEverything = function (){

    var fnameError = document.getElementById('fNameError');
    var CurrentStatus = document.getElementById('fNameCheking');


    fnameError.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';
    

    var LnameError = document.getElementById('lNameError');
    CurrentStatus = document.getElementById('LNameCheking');

    LnameError.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';

    var passwordError = document.getElementById('passError');
    CurrentStatus = document.getElementById('PassCheking');

    passwordError.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';

    var passwordErrorRe = document.getElementById('passErrorRe');
    CurrentStatus = document.getElementById('rePassCheking');

    passwordErrorRe.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass';

    var phoneError = document.getElementById('pError');
    CurrentStatus = document.getElementById('telChecked');
    phoneError.innerHTML = '';
    CurrentStatus.innerHTML = '';
    CurrentStatus.className = 'fieldClass'; 

 
    var EduStat = document.getElementsByName('EduStat');
    var EduError = document.getElementById('EduError');
    let i = 0;
    for (; i < EduStat.length; i++){
        EduStat[i].value = '';        
    }
    EduError.innerHTML = '';

};
