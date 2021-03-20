import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set-name': this.onSetNameClick,
      'click:#set-age': this.onSetAgeClick,
      'click:#save-model': this.onSaveClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    let name = '';
    if (input) {
      name = input.value;
    }

    this.model.set({ name });
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder='${this.model.get('name')}'/>
        <button id='set-name'>Change Name</button>
        <button id='set-age'>Set Random Age</button>
        <button id='save-model'>Save User</button>
      </div>
    `;
  }
}
