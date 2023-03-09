import { IValidator } from './base';

export class MinLengthValidator implements IValidator {
  private readonly defaultMinLength = 3;

  constructor(private minLength: number, private message: string) {}

  validate(target: Object, propertyKey: string): string {
    const value = target[propertyKey];
    const conditionalValue = this.minLength || this.defaultMinLength;
    if (
      typeof target[propertyKey] === 'string' &&
      value.length >= conditionalValue
    ) {
      return null;
    } else {
      return (
        this.message ||
        `Value from property ${propertyKey} should have min length of ${conditionalValue}`
      );
    }
  }
}
