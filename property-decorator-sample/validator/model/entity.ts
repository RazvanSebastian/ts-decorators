import { Email, MaxLength, MinLength } from '../validators-annotations';

export class Entity {
  @Email()
  public email: string;

  @MinLength(2)
  @MaxLength(5)
  public text: string;
}
