export default `
<main class='form-layout'>
  <form name='login-form' class='form'>
    {{> header text='Вход' class='header mb-50' }}
    <div class='form-inputs mb-140'>
      {{#each inputs}}
        {{> input item=this }}
      {{/each}}
    </div>
    {{> button label=confirm.label class='button' type='button' }}
    {{> link label=link.label href=link.href }}
  </form>
</main>
`;
