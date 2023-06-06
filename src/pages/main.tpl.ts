export default `
<main class='main-layout'>
  {{#each links}}
  {{> link label=this.label href=this.href }}
  {{/each}}
</main>
`;
