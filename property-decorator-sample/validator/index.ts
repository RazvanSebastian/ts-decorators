import { Entity } from './model/entity';
import './validators-annotations';
import { validate } from './validators-utils';

const initializeContent = () => {
  const content = `
    <div class="w-50 mx-auto mt-5">
      <div class="mb-3 form-check">  
          <label class="form-label" for="email">Email:</label>
          <input class="form-control" type="text" id="email" name="email" placeholder="email">
          <div id="emailValidationErrors"></div>
        </div>
        <div class="mb-3 form-check">
          <label class="form-label" for="text">Text:</label>
          <input class="form-control" type="text" id="text" name="text" placeholder="some text">
          <div id="textValidationErrors"></div>
        </div>
        <div class="mb-3 form-check">
          <button class="btn btn-primary">Submit</button>
        </div>
    </div> 
  `;
  document.getElementById('body').innerHTML = content;
};

const showValidationErrors = (id: string, errors: string[]) => {
  const errorsContentElement = document.querySelector(`#${id}`);
  if (errors.length > 0) {
    const errorsContent = errors
      .map((error) => `<p class='error m-1'>${error}</p>`)
      .join('');
    errorsContentElement.innerHTML = errorsContent;
  } else {
    errorsContentElement.innerHTML = '';
  }
};

initializeContent();
const entity = new Entity();

document.querySelector('#email').addEventListener('input', (event: any) => {
  entity.email = event.target.value;
});
document.querySelector('#text').addEventListener('input', (event: any) => {
  entity.text = event.target.value;
});
document.querySelector('button').addEventListener('click', (event) => {
  const targetValidationErrors = validate(entity);
  for (let [property, propertyValidationErrors] of targetValidationErrors) {
    showValidationErrors(
      `${property}ValidationErrors`,
      propertyValidationErrors
    );
  }
});
