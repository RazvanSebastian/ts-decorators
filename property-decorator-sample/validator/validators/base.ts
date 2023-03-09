export interface IValidator {
  validate(target: Object, propertyKey: string): string;
}

export type ValidationResult = { [x: string]: string[] };
