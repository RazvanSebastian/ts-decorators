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

    let allTargetMetadata =
      Reflect.getMetadata(PROPERTY_METADATA_KEY, constructor) || {};

    console.log(`#4 All metadata for target = `, allTargetMetadata);

    let metadataOnProperty = allTargetMetadata?.[propertyKey];
    console.log(
      `#5 Metadata on property ${propertyKey as string} =`,
      metadataOnProperty
    );

    if (metadataOnProperty) {
      metadataOnProperty = {
        ...metadataOnProperty,
        [metadataKey]: metadataValue,
      };
      allTargetMetadata = {
        ...allTargetMetadata,
        [propertyKey]: metadataOnProperty,
      };
    } else {
      allTargetMetadata = {
        ...allTargetMetadata,
        [propertyKey]: { ...metadataOnProperty, [metadataKey]: metadataValue },
      };
    }
    Reflect.defineMetadata(
      PROPERTY_METADATA_KEY,
      allTargetMetadata,
      constructor
    );
  };
}
