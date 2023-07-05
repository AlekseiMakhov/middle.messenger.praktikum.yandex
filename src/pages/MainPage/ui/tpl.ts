export default `
<main class='main-layout'>
  <nav class='links'>
    {{#each links}}
      <li>
        {{{this}}}
      </li>
    {{/each}}
  </nav>
</main>
`;
