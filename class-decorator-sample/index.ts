import { handleRouting } from './router-annotation.handler';
import './router-pages';

const initializeContent = () => {
  const content = `
    <nav>
        <ul>
        <li><a data-router-link="/home">Home page</a></li>
        <li><a data-router-link="/users">User page</a></li>
        <li><a data-router-link="/not-found">Link with invalid path</a></li>
      </ul>
    </nav>
    <div id="app"></div>
  `;
  document.getElementById('body').innerHTML = content;
};

initializeContent();
handleRouting();
