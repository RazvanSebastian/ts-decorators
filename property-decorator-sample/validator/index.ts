import { Entity } from './model/entity';
import { validate } from './validators-utils';

const entity: Entity = {
  email: 'razvan@gmail.com',
  text: 'text',
};

console.log(validate(entity));
