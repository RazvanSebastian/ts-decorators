import { DummyAuditClass } from './audit-annotation';
import { initializeRouting } from './router-annotation.registry';
import './router-pages';

// Audit decorator
const audit1 = new DummyAuditClass();
console.log(Object.getOwnPropertyDescriptor(audit1, 'createdAt'));
console.log((audit1 as any).getCreatedAt());

// Router class decorator
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
initializeRouting();
