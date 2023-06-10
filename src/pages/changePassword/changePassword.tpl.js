export default `
<main class='form-layout'>
  {{> avatar
    class='avatar-container mb-90'
    src=avatar.src
    alt=avatar.alt
  }}
  {{> form
    name='change-password-form'
    class='form w-510'
    headerClass='header mb-50'
    elementsClass='form__elements mb-160'
    submitButtonClass='button w-280 a-s-c'
    submitButtonId=confirm.id
    confirmLabel=confirm.label
    inputs=inputs
  }}
</main>
`;
