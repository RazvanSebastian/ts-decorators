import { Cacheable } from './cache-annotation';

export class DummyService {
  @Cacheable()
  find(id: number) {
    console.log(`Called real method with id = ${id}`);
    return `Result of find = ${Math.random()}`;
  }
}
