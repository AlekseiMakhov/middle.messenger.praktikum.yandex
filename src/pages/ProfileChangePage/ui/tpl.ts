export default `
<section class='main-layout'>
  {{{avatar}}}
  <form class='form w-380'>
    <div class='form__elements mb-50'>
      {{#each elements}}
        {{{this}}}
      {{/each}}
    </div>
    {{{profileChangeConfirm}}}
  </form>
  {{{link}}}
</section>
`;
