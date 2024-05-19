import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(
  message?: string
): ValidatorFn {
  const phoneNumberPattern = /^[0-9]{10}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = phoneNumberPattern.test(control.value);
    return isValid
      ? null
      : { phoneNumber: !!message ? message : 'Invalid Phone number' };
  };
}
