import { addValidatorToMetadata } from './validators-utils';
import { EmailValidator } from './validators/email';
import { MaxLengthValidator } from './validators/max-length';
import { MinLengthValidator } from './validators/min-length';

export function Email(pattern?: RegExp, message?: string): PropertyDecorator {
  return function (target: Object, propertyKey: string): void {
    const validator = new EmailValidator(pattern, message);
    addValidatorToMetadata(target, propertyKey, validator);
  };
}

export function MaxLength(max?: number, message?: string): PropertyDecorator {
  return function (target: Object, propertyKey: string): void {
    const validator = new MaxLengthValidator(max, message);
    addValidatorToMetadata(target, propertyKey, validator);
  };
}

export function MinLength(min?: number, message?: string): PropertyDecorator {
  return function (target: Object, propertyKey: string): void {
    const validator = new MinLengthValidator(min, message);
    addValidatorToMetadata(target, propertyKey, validator);
  };
}
