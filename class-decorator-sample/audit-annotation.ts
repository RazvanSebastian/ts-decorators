// Audit to class decorator
export function Audit<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
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
