import { registerNewPage } from './router-annotation.registry';
import { RouterPage } from './router-pages';

export function Router(path: string): ClassDecorator {
  return (target: any) => {
    console.log(
      `Initialized router with { 'path': '${path}', 'target': '${target.name}'}`
    );
    const newInstance = new target() as RouterPage;
    newInstance['path'] = path;
    registerNewPage(path, newInstance);
  };
}
