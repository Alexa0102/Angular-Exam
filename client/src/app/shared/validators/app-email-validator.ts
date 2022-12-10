import { AbstractControl, ValidationErrors} from "@angular/forms";

export function appEmailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return /^[a-zA-Z0-9\.-]{6,}(@abv|@gmail)\.(bg|com)$/.test(control.value) ? null : {
    invalidEmail: true
  };
}
export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  if(!control.value){ return null;}
  const password = control.parent?.get('password')?.value;
  const rePassword = control.value;
  return password == rePassword ? null : {invalidPasswords: true}
}