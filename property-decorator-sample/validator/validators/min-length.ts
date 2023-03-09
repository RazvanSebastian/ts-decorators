import { IValidator } from './base';

export class MinLengthValidator implements IValidator {
  private _minLength = 3;
  private _message = null;

  constructor(minLength: number, message: string) {
    this._minLength = minLength > 0 ? minLength : this._minLength;
    this._message = message;
  }

  validate(target: Object, propertyKey: string): string {
    const value = target[propertyKey];
    if (value instanceof String && value.length >= this._minLength) {
      return null;
    } else {
      return (
        this._message ||
        `Value ${value} from property ${propertyKey} should have min length of ${this._minLength}`
      );
    }
  }
}
