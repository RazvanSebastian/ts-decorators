import { RouterPage } from './router-pages';

const registeredRouterPages = new Map<string, RouterPage>();

export const getRegisteredRouterPages = () => {
  return registeredRouterPages;
};

export function Router(path: string): ClassDecorator {
  console.log('Decorator -> Router');
  return (target: any) => {
    console.log('Decorator -> Router -> ClassDecorator');
    const newInstance = new target() as RouterPage;
    newInstance['path'] = path;
    registeredRouterPages.set(path, newInstance);
  };
}
