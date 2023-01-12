import { Router } from './router-annotation';

export interface RouterPage {
  render(): string;
}

@Router('/home')
export class HomePage implements RouterPage {
  constructor() {
    console.log('HomePage constructor');
  }

  render(): string {
    return `<h1> Home page </h1>`;
  }
}

@Router('/users')
export class UserPage implements RouterPage {
  constructor() {
    console.log('UserPage constructor');
  }

  render(): string {
    return `<h1> User page </h1>`;
  }
}

@Router('/404')
export class NotFoundPage implements RouterPage {
  constructor() {
    console.log('NotFoundPage constructor');
  }

  render(): string {
    return '<h1> Not found page </h1>';
  }
}
