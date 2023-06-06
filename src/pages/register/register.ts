export default () => {
  const model = {};
  const form = document.getElementsByName('register-form')[0];

  const elements = form.querySelectorAll('input');

  const fillModel = (e, field) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
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
