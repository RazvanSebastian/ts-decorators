import { RouterPage } from './router-pages';

const ROUTER_PAGES_REGISTRY = new Map<string, RouterPage>();

const getRouterPageByRouterLinkPath = (event: any): RouterPage => {
  const routerLinkPath = (event.target as HTMLElement).getAttribute(
    'data-router-link'
  );
  const routerPage = ROUTER_PAGES_REGISTRY.get(routerLinkPath);
  return routerPage || ROUTER_PAGES_REGISTRY.get('/404');
};

const renderRouterPageContent = (routerPage: RouterPage): void => {
  document.getElementById('app').innerHTML = routerPage.render();
};

const handleClickRouterLink = (linkElement: Element) => {
  linkElement.addEventListener('click', (event: any) => {
    const routerPage = getRouterPageByRouterLinkPath(event);
    renderRouterPageContent(routerPage);
  });
};

export const initializeRouting = () => {
  document
    .querySelectorAll('a[data-router-link]')
    .forEach(handleClickRouterLink);
};

export const registerNewPage = (path: string, routerPage: RouterPage) => {
  ROUTER_PAGES_REGISTRY.set(path, routerPage);
};
