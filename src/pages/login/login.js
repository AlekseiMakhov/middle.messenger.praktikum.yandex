export default () => {
  const model = {
    login: '',
    password: '',
  };
  const form = document.getElementsByName('login-form')[0];

  const elements = form.querySelectorAll('input');

  const fillModel = (e, field) => {
    e.preventDefault();
    const target = e.target;
    model[field] = target.value;
  };

  elements.forEach((element) => {
    const field = element.id;
    element.addEventListener('change', (e) => fillModel(e, field));
  });

  const submitButton = document.querySelector('#submit-button');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(model);
  });
};
