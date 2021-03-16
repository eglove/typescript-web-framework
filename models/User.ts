import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private readonly data: UserProps) {}

  get(propName: string): string | number {
    // @ts-ignore
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
