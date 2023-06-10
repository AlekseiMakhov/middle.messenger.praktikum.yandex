export default `
<main class='form-layout'>
  {{> form
    name='login-form'
    header='Вход'
    class='form w-380'
    headerClass='header mb-50'
    elementsClass='form__elements mb-140'
    submitButtonClass='button'
    submitButtonId=confirm.id
    confirmLabel=confirm.label
    inputs=inputs
  }}
  {{> link
    label=link.label
    href=link.href
  }}
</main>
`;
