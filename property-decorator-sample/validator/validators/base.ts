export interface IValidator {
  validate(target: Object, propertyKey: string): string | null;
}

export type ValidationResult = { [x: string]: string[] };
