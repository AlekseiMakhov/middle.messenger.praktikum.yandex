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
    elementsClass='form__elements mb-50'
    submitButtonClass='button w-280 a-s-c'
    inputs=inputs
  }}
  <div class='w-510 df dfc'>
    {{#each buttons}}
      {{> button
        id=this.id
        label=this.label
        class=this.class
        type='button'
      }}
    {{/each}}
  </div>
</main>
`;
