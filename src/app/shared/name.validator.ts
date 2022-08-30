import { AbstractControl, ValidatorFn } from '@angular/forms';

export function VersionValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const allowedChars = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '.',
    ];
    const input = control.value;
    const accedptedChars = input.filter((char) => {
      return allowedChars.indexOf(char);
    });
    return accedptedChars && input && accedptedChars.length === input.length
      ? null
      : { invalidVersion: true };
  };
}
