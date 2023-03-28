import { Cacheable } from './cache-annotation';

export class DummyService {
  @Cacheable()
  doSomething(arg1: number, arg2: string, arg3: boolean) {
    console.log(
      `Called real method with arg1=${arg1}; arg2=${arg2}; arg3=${arg3}`
    );
    return `Result of find = ${Math.random()}`;
  }
}
