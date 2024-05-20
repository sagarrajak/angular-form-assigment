import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

export interface UserRestoreFormInterface<T extends FormGroup> {
  formGroup: T;
  isChange: boolean;
  restoreValues(): void;
  setInitialValue(): void;
  getValues(): void;
  isFormDirty: boolean;
  getFormControl(key: T extends FormGroup<infer F> ? F : any): void;
}

export abstract class AbstractBaseUserRestoreForm<T extends FormGroup>
  implements UserRestoreFormInterface<T>
{
  public abstract formGroup: T;
  isChange: boolean = false;

  abstract restoreValues(): void;

  abstract setInitialValue(): void;

  public getValues() {
    return this.formGroup.value;
  }

  get isFormDirty() {
    return this.formGroup.dirty;
  }

  public getFormControl(key: T extends FormGroup<infer F> ? F extends {[key in infer X]: FormControl<infer X>} ? X : any : any) {
    return this.formGroup.controls[key];
  }
}
