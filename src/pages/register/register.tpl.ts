export default `
<main class='form-layout'>
  <form name='register-form' class='form'>
    {{> header text='Регистрация' class='header mb-50' }}
    <div class='form__elements mb-40'>
      {{#each inputs}}
        {{> input item=this }}
      {{/each}}
    </div>
    {{> button label=confirm.label class='button' type='button' }}
    {{> link label=link.label href=link.href class="button button_link" }}
  </form>
</main>
`;
