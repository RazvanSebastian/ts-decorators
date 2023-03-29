@Reflect.metadata('decoratorClassKey', 'class decorator value')
class MetadataDecoratorsExample {
  @Reflect.metadata('decoratorPropertyKey', 'property decorator value')
  property: string;

  @Reflect.metadata('decoratorMethodKey', 'method decorator value')
  method(param1: number, param2: string): string {
    return 'I am a decorated method';
  }
}

const decoratorsExample = new MetadataDecoratorsExample();

console.log('#1 Class decorator details');
console.log(
  'Reflect.getMetadataKeys(MetadataDecoratorsExample) -> ',
  Reflect.getMetadataKeys(MetadataDecoratorsExample)
);
console.log(
  "Reflect.getMetadata('decoratorClassKey', decoratorsExample) -> ",
  Reflect.getMetadata('decoratorClassKey', MetadataDecoratorsExample)
);

console.log('\n#2 Method decorator details');
console.log(
  "Reflect.getMetadataKeys(decoratorsExample, 'method') -> ",
  Reflect.getMetadataKeys(decoratorsExample, 'method')
);
console.log(
  "Reflect.getMetadata('decoratorMethodKey', decoratorsExample, 'method') -> ",
  Reflect.getMetadata('decoratorMethodKey', decoratorsExample, 'method')
);
console.log(
  'design:type -> ',
  Reflect.getMetadata('design:type', decoratorsExample, 'method')
);
console.log(
  'design:paramtypes -> ',
  Reflect.getMetadata('design:paramtypes', decoratorsExample, 'method')
);
console.log(
  'design:returntype -> ',
  Reflect.getMetadata('design:returntype', decoratorsExample, 'method')
);

console.log('\n#3 Property decorator details');
console.log(
  "Reflect.getMetadataKeys(decoratorsExample, 'property') -> ",
  Reflect.getMetadataKeys(decoratorsExample, 'property')
);
console.log(
  "Reflect.getMetadata('decoratorPropertyKey', decoratorsExample, 'property') -> ",
  Reflect.getMetadata('decoratorPropertyKey', decoratorsExample, 'property')
);
console.log(
  "Reflect.getMetadata('design:type', decoratorsExample, 'property') -> ",
  Reflect.getMetadata('design:type', decoratorsExample, 'property')
);
