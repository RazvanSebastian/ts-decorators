import { IValidator } from './base';

export class EmailValidator implements IValidator {
  private readonly defaultPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(private pattern: RegExp, private message: string) {}

  validate(target: Object, propertyKey: string): string {
    const conditionalPattern = this.pattern || this.defaultPattern;
    if (
      typeof target[propertyKey] === 'string' &&
      conditionalPattern.test(target[propertyKey])
    ) {
      return null;
    } else {
      return (
        this.message ||
        `Value from property ${propertyKey} is not a valid email`
      );
    }
  }
}
