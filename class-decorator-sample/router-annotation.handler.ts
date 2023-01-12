import { getRegisteredRouterPages } from './router-annotation';
import { RouterPage } from './router-pages';

const getRouterPageByRouterLinkPath = (event: any): RouterPage => {
  const registeredRouterPages = getRegisteredRouterPages();
  const routerLinkPath = (event.target as HTMLElement).getAttribute(
    'data-router-link'
  );
  const routerPage = registeredRouterPages.get(routerLinkPath);
  return routerPage || registeredRouterPages.get('/404');
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

export const handleRouting = () => {
  document
    .querySelectorAll('a[data-router-link]')
    .forEach(handleClickRouterLink);
};
