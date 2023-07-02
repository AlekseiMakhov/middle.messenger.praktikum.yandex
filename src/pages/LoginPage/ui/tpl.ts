export default `
<section class="main-layout">
  <form class="form w-380">
    {{{header}}}
    <div class='form__elements mb-140'>
      {{#each formElements}}
        {{{this}}}
      {{/each}}
    </div>
    {{{confirmButton}}}
  </form>
  {{{link}}}
</section>
`;
