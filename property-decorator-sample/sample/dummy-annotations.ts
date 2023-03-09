export const PROPERTY_METADATA_KEY = Symbol('propMeta');

export function addMetadata(
  metadataKey: string,
  metadataValue: any
): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol): void {
    console.log(
      `Add on property = ${propertyKey as string} metadata key = ${metadataKey}`
    );

    let allTargetMetadata =
      Reflect.getMetadata(PROPERTY_METADATA_KEY, target) || {};

    console.log('All metadata for target = ', allTargetMetadata);

    let metadataOnProperty = allTargetMetadata?.[propertyKey];
    console.log(
      `Metadata on property ${propertyKey as string} = ${metadataOnProperty}`
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
    Reflect.defineMetadata(PROPERTY_METADATA_KEY, allTargetMetadata, target);
  };
}
