import { Dummy } from './dummy';
import { PROPERTY_METADATA_KEY } from './dummy-annotations';

const dummy = new Dummy();
dummy.prop1 = 'prop1';
dummy.prop2 = 'prop2';

const props = Reflect.ownKeys(dummy) as string[];
for (let prop of props) {
  console.log(
    `#5 Get metadata for property ${prop} -> `,
    Reflect.getMetadata(PROPERTY_METADATA_KEY, dummy, prop)
  );
}
