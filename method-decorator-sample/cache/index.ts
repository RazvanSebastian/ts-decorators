import { DummyService } from './dummy-service';
import 'reflect-metadata';

const dummyService = new DummyService();
console.log(dummyService.find(1));
console.log(dummyService.find(1));

console.log(dummyService.find(2));
