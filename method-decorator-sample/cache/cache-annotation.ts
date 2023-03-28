const CACHE_METADATA_KEY = Symbol('cache');

export function Cacheable(): MethodDecorator {
  let peviousMethodCallArgs = [];
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    const originalFunction = descriptor.value;

    // Set cache on target
    const cacheMetadata: Map<String, Object> =
      Reflect.getMetadata(CACHE_METADATA_KEY, target) ||
      new Map<String, Object>();

    cacheMetadata.set(propertyKey, '');

    Reflect.defineMetadata(CACHE_METADATA_KEY, cacheMetadata, target);

    descriptor.value = (...args: any) => {
      let calledWithSameArgs = true;

      // Check if the method was called with same parameters
      for (let i = 0; i < args.length; i++) {
        calledWithSameArgs =
          calledWithSameArgs && peviousMethodCallArgs?.[i] === args[i];
      }

      // Update last args
      peviousMethodCallArgs = [...args];

      if (!calledWithSameArgs) {
        const result = originalFunction.apply(this, args);
        cacheMetadata.set(propertyKey, result);
        return result;
      } else {
        return cacheMetadata.get(propertyKey);
      }
    };
  };
}
