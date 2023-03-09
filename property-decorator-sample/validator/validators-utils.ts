import { IValidator, ValidationResult } from './validators/base';

const PROPERTY_VALIDATORS_METADATA_KEY = Symbol('validatorsMetadata');

export const validate = (target: Object): Map<string, string[]> => {
  const propertiesValidators: Map<string, IValidator[]> = Reflect.getMetadata(
    PROPERTY_VALIDATORS_METADATA_KEY,
    target
  );

  if (!propertiesValidators) {
    return null;
  }

  const targetEvaluation = new Map<string, string[]>();
  for (let [property, validators] of propertiesValidators) {
    const propertyEvaluation = validators
      .map((validator) => validator.validate(target, property))
      .filter((error) => !!error);
    targetEvaluation.set(property, propertyEvaluation);
  }

  return targetEvaluation;
};

export const addValidatorToMetadata = (
  target: Object,
  propertyKey: string,
  validator: IValidator
) => {
  let targetValidators: Map<string, IValidator[]> = Reflect.getMetadata(
    PROPERTY_VALIDATORS_METADATA_KEY,
    target
  );

  if (!targetValidators) {
    targetValidators = new Map<string, IValidator[]>();
  }

  if (targetValidators.has(propertyKey)) {
    targetValidators.get(propertyKey).push(validator);
  } else {
    targetValidators.set(propertyKey, [validator]);
  }

  Reflect.defineMetadata(
    PROPERTY_VALIDATORS_METADATA_KEY,
    targetValidators,
    target
  );
};
