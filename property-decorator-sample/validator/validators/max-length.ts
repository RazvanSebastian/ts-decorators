import { IValidator } from './base';

export class MaxLengthValidator implements IValidator {
  private readonly defaultMaxLength = 10;

  constructor(private maxLength: number, private message: string) {}

  validate(target: Object, propertyKey: string): string {
    const value = target[propertyKey];
    const conditionValue = this.maxLength || this.defaultMaxLength;
    if (
      typeof target[propertyKey] === 'string' &&
      value.length <= conditionValue
    ) {
      return null;
    } else {
      return (
        this.message ||
        `Value from property ${propertyKey} should have max length of ${conditionValue}`
      );
    }
  }
}
