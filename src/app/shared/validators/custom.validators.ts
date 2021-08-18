import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    static moreThan(age: number) {
        return (control: AbstractControl) => {
            const v = control.value;
            if(!v) {
                return null;
            }
            const today = new Date();
            if(today.getFullYear() - new Date(v).getFullYear() < age) {
                return { 'tooYoung': true }
            }
            return null;
        }; 
    }
}