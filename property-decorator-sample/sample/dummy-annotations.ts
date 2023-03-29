export const PROPERTY_METADATA_KEY = Symbol('propMeta');

export function addMetadata(
  metadataKey: string,
  metadataValue: any
): PropertyDecorator {
  console.log(
    `#1 Expression @addMetadata(${metadataKey}, ${metadataValue}}) called`
  );
  return function (constructor: Function, propertyKey: string | symbol): void {
    console.log(
      `#2 PropertyDecorator called for @addMetadata(${metadataKey}, ${metadataValue})`
    );
    console.log(`#3 PropertyKey = ${propertyKey as string}`);

    let metadataOnProperty =
      Reflect.getMetadata(PROPERTY_METADATA_KEY, constructor, propertyKey) ||
      {};

    console.log(`#4 Property metadata = `, metadataOnProperty);

    if (metadataOnProperty) {
      metadataOnProperty = {
        ...metadataOnProperty,
        [metadataKey]: metadataValue,
      };
    }
    Reflect.defineMetadata(
      PROPERTY_METADATA_KEY,
      metadataOnProperty,
      constructor,
      propertyKey
    );
  };
}
