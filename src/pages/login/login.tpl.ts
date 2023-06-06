export default `
<main class='form-layout'>
  <form name='login-form' class='form'>
    {{> header text='Вход' class='header mb-50' }}
    <div class='form__elements mb-140'>
      {{#each inputs}}
        {{> input item=this onChange='change' }}
      {{/each}}
    </div>
    {{> button id='submit-button' label=confirm.label class='button' type='button' onClick="click" }}
    {{> link label=link.label href=link.href }}
  </form>
</main>
`;
