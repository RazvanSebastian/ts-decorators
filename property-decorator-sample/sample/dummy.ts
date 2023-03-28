import { addMetadata } from './dummy-annotations';

export class Dummy {
  constructor() {}

  @addMetadata('meta_key11', 'meta_value11')
  @addMetadata('meta_key12', 'meta_value12')
  public prop1: string;

  @addMetadata('meta_key2', 'meta_value2')
  public prop2: string;
}
