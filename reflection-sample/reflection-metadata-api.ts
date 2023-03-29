/**
 * =========================================================================================
 * ====== Tests metadata define, get, set, delete of additional data about object =======
 * =========================================================================================
 */
class MetadataDummy {
  prop1: string = 'default';
  prop2: number = 10;
}

const metadataDummy = new MetadataDummy();

console.log('\n\n====== Tests metadata define, has, get, delete =======');

console.log('\n#1.1.Define metadata on object level');
console.log(
  "Reflect.defineMetadata('metaObjKey', 'metaObjValue', metadataDummy)"
);
Reflect.defineMetadata('metaObjKey', 'metaObjValue', metadataDummy);

console.log('\n#1.2.Define metadata on object property level');
console.log(
  "Reflect.defineMetadata('metaProp1Key', 'metaProp1Value', metadataDummy, 'prop1')"
);
Reflect.defineMetadata(
  'metaProp1Key',
  'metaProp1Value',
  metadataDummy,
  'prop1'
);

console.log('\n#2.1.Has object level metadata tests');
console.log(
  "Reflect.hasMetadata('metaObjKey', metadataDummy) -> ",
  Reflect.hasMetadata('metaObjKey', metadataDummy)
);

console.log('\n#2.2.Has object property level metadata tests');
console.log(
  "Reflect.hasMetadata('metaProp1Key', metadataDummy, 'prop1') -> ",
  Reflect.hasMetadata('metaProp1Key', metadataDummy, 'prop1')
);

console.log('\n#3.1.Get object level metadata tests');
console.log(
  'Reflect.getMetadataKeys(metadataDummy)) -> ',
  Reflect.getMetadataKeys(metadataDummy)
);
console.log(
  'Reflect.getMetadata(dummyExample) -> ',
  Reflect.getMetadata('metaObjKey', metadataDummy)
);

console.log('\n#3.1.Get object proprty level metadata tests');
console.log(
  "Reflect.getMetadataKeys(metadataDummy, 'prop1')",
  Reflect.getMetadataKeys(metadataDummy, 'prop1')
);
console.log(
  "Reflect.getMetadata('metaProp1Key', metadataDummy, 'prop1') -> ",
  Reflect.getMetadata('metaProp1Key', metadataDummy, 'prop1')
);
