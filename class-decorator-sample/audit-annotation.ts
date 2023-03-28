// Audit to class decorator (override the constructor)
export function Audit<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    private createdAt = new Date().toLocaleString('en-US');
    getCreatedAt() {
      return this.createdAt;
    }
  };
}

@Audit
export class DummyAuditClass {
  prop1: string = 'prop1';

  func(msg: string) {
    return `Func msg = ${msg}`;
  }
}
