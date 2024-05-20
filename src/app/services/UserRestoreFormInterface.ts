import { FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

export interface UserRestoreFormInterface<T extends FormGroup> {
  formGroup: T;
  isChange: number;
  restoreValues(): void;
  setInitialValue(value: any): void;
  getValues(): void;
  isFormDirty: boolean;
  getFormControl(key: T extends FormGroup<infer F> ? F : any): void;
}

export abstract class AbstractBaseUserRestoreForm<T extends FormGroup>
  implements UserRestoreFormInterface<T>
{
  public abstract formGroup: T;
  protected subscriber = new Map<string, (value: boolean) => void>();
  isChange: number = 0;

  abstract restoreValues(): void;

  abstract setInitialValue(value: any): void;

  public getValues() {
    return this.formGroup.value;
  }

  get isFormDirty() {
    return this.formGroup.dirty;
  }

  public getFormControl(key: any) {
    return this.formGroup.controls[key];
  }

  public addSubsciber(func: (value: boolean) => void) {
    const id = uuidv4()
    this.subscriber.set(id, func);
    return id;
  }
}
