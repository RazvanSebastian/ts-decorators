export function MockMethod(mockValue: any): MethodDecorator {
  console.log('#1 Factory function called');
  return function (
    target: Object, // The prototype of the class
    propertyKey: string, // Name of the method
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    console.log('#2 MethodDecorator function called');
    console.log(`logMethod`, {
      target,
      propertyKey,
      descriptor,
      targetKeys: Object.getOwnPropertyNames(target),
      function: descriptor.value,
      funcText: descriptor.value.toString(),
    });

    // Mock the function
    descriptor.value = (...args: any) => {
      console.log(
        `#3 Fake method call: Method ${propertyKey} called with the following parameters ${args}`
      );
      return mockValue;
    };
  };
}

export class Dummy {
  @MockMethod(0)
  add(a: number, b: number) {
    return a + b;
  }
}
