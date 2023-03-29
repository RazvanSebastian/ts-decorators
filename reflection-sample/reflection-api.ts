/**
 * =================================================
 * ====== Tests retrieving data about object =======
 * =================================================
 */
class Dummy {
  private _privateProp1: string;
  private _privateProp2: string;
  publicProp: string;

  constructor(privateProp1: string) {
    this._privateProp1 = privateProp1;
  }

  get privateProp2() {
    return this._privateProp2;
  }

  set privateProp2(value: string) {
    this._privateProp2 = value;
  }

  dummyFunction() {
    return 'something';
  }
}

const newDummy = new Dummy('private prop1 value');

console.log('====== Tests retrieving data about object =======');
console.log('\n#1.Has method');
console.log(
  "Reflect.has(newDummy, 'privateProp1') -> ",
  Reflect.has(newDummy, 'privateProp1')
);
console.log(
  "Reflect.has(newDummy, 'privateProp2') -> ",
  Reflect.has(newDummy, 'privateProp2')
);
console.log(
  "Reflect.has(newDummy, 'publicProp') -> ",
  Reflect.has(newDummy, 'publicProp')
);
console.log('Asign value to publicProp');
newDummy.publicProp = 'public prop value';
console.log(
  "Reflect.has(newDummy, 'publicProp') -> ",
  Reflect.has(newDummy, 'publicProp')
);

console.log('\n#2.Reflect.ownKeys and Object.keys');
console.log(`Reflect.ownKeys(newDummy) -> ${Reflect.ownKeys(newDummy)}`);
console.log('Object.keys(newDummy) -> ', Object.keys(newDummy));

console.log(
  '\n#3.Reflect.getOwnPropertyDescriptor and Object.getOwnPropertyDescriptor'
);
console.log(
  "Reflect.getOwnPropertyDescriptor(newDummy, 'publicProp') -> ",
  Reflect.getOwnPropertyDescriptor(newDummy, 'publicProp')
);

console.log(
  "Object.getOwnPropertyDescriptor(newDummy, 'publicProp') -> ",
  Object.getOwnPropertyDescriptor(newDummy, 'publicProp')
);

/**
 * =====================================================================================
 * ====== Tests defining, getting, setting and deleting properties of the object =======
 * =====================================================================================
 */
const dummyExample = {
  prop1: 'property1',
  prop2: 10,
};

console.log(
  '\n\n====== Tests defining, getting, setting and deleting properties ======='
);
console.log('\n#1.Define property');
console.log(
  "Reflect.defineProperty(dummyExample, 'newProp', PropertyDescriptor)"
);
Reflect.defineProperty(dummyExample, 'newProp', {
  configurable: true,
  enumerable: true,
  value: 'newProp value',
  writable: true,
});
console.log(Reflect.getOwnPropertyDescriptor(dummyExample, 'newProp'));

console.log('\n#2.Get property');
console.log(
  `Reflect.get(dummyExample, 'newProp') -> ${Reflect.get(
    dummyExample,
    'newProp'
  )}`
);

console.log('\n#3.Set property');
console.log("Reflect.set(dummyExample, 'prop2', 20)");
Reflect.set(dummyExample, 'prop2', 20);
console.log(
  "Reflect.get(dummyExample, 'prop2') -> ",
  Reflect.get(dummyExample, 'prop2')
);

console.log('\n#4.Delete property');
console.log("Reflect.deleteProperty(dummyExample, 'prop1')");
Reflect.deleteProperty(dummyExample, 'prop1');
console.log('Reflect.ownKeys(dummyExample) -> ', Reflect.ownKeys(dummyExample));
