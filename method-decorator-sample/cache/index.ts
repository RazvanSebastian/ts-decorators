import { DummyService } from './dummy-service';
import 'reflect-metadata';

const dummyService = new DummyService();
console.log(dummyService.doSomething(1, '1', true));
console.log(dummyService.doSomething(1, '1', true));
console.log(dummyService.doSomething(1, '1', true));

console.log(dummyService.doSomething(2, '2', false));
