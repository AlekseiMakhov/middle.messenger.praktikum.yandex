export default `
{{#if header}}
  {{{header}}}
{{/if}}
{{#if formElementsClass}}
  <div class="{{formElementsClass}}">
{{/if}}
  {{#each formElements}}
    {{{this}}}
  {{/each}}
{{#if formElementsClass}}
  </div>
{{/if}}
{{{confirmButton}}}
`;
