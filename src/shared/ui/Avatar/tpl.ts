export default `
{{#if src}}
<img
  src={{src}}
  alt='{{alt}}'
  class='avatar'
/>
{{else}}
  <div class='avatar-container__empty'></div>
{{/if}}
`;
