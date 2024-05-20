import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const valid = !isNaN(value) && value !== null && value !== '';
    return valid ? null : { 'notANumber': { value: control.value, message: 'Value must be a number' } };
  };
}
