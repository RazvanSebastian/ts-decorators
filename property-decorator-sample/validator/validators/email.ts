import { IValidator } from './base';

export class EmailValidator implements IValidator {
  private _pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private _message = null;

  constructor(pattern: RegExp, message: string) {
    this._pattern = pattern || this._pattern;
    this._message = message;
  }

  validate(target: Object, propertyKey: string): string {
    const value = target[propertyKey];
    if (
      target[propertyKey] instanceof String &&
      this._pattern.test(target[propertyKey])
    ) {
      return null;
    } else {
      return (
        this._message ||
        `Value ${value} from property ${propertyKey} is not a valid email`
      );
    }
  }
}
