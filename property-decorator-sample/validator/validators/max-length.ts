import { IValidator } from './base';

export class MaxLengthValidator implements IValidator {
  private _maxLength = 10;
  private _message = null;

  constructor(maxLength: number, message: string) {
    this._maxLength = maxLength > 0 ? maxLength : this._maxLength;
    this._message = message;
  }

  validate(target: Object, propertyKey: string): string {
    const value = target[propertyKey];
    if (value instanceof String && value.length <= this._maxLength) {
      return null;
    } else {
      return (
        this._message ||
        `Value ${value} from property ${propertyKey} should has max length of ${this._maxLength}`
      );
    }
  }
}
