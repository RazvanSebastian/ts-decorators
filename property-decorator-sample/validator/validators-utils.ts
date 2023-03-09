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

  const targetEvaluation = new Map(
    Object.keys(propertiesValidators).map((propertyKey: string) => {
      const propertyEvaluation = propertiesValidators
        .get(propertyKey)
        .map((validator) => validator.validate(target, propertyKey));
      return [propertyKey, propertyEvaluation];
    })
  );

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

  Reflect.metadata(PROPERTY_VALIDATORS_METADATA_KEY, targetValidators);
};
