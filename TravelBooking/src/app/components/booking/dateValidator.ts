import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ValidateDate(control:AbstractControl):ValidationErrors | null  {
        let input = new Date(control.value);
        console.log(control.value)
        let today = new Date();
        console.log("OKK")
        if(input>today){
            return null;
        }else{
            return {validate:true};

        }
    }
