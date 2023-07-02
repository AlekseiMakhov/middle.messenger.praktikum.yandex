export default `
<section class='main-layout'>
  {{{avatar}}}
  <div class='form w-510'>
    <div class='form__elements mb-50'>
      {{#each elements}}
        {{{this}}}
      {{/each}}
    </div>
  </div>
  <div class='w-510 df dfc'>
    {{{profileChangeLink}}}
    {{{passwordChangeLink}}}
    {{{logoutLink}}}
  </div>
</section>
`;
