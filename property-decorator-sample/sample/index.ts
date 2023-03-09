import { Dummy } from './dummy';
import { PROPERTY_METADATA_KEY } from './dummy-annotations';

const dummy = new Dummy();

console.log(Reflect.getMetadata(PROPERTY_METADATA_KEY, dummy));
