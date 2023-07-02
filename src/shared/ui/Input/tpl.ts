export default `
<label
  for={{id}}
  class="input__label"
>
  {{label}}
</label>
<input
  class="input__element"
  data-events=true
  id={{id}}
  name={{name}}
  {{#if placeholder}}
    placeholder="{{placeholder}}"
  {{/if}}
  {{#if disabled}}
    disabled
  {{/if}}
  {{#if type}}
    type={{type}}
  {{else}}
    type="text"
  {{/if}}
  {{#if autocomplete}}
    autocomplete={{autocomplete}}
  {{/if}}
  {{#if value}}
    value={{value}}
  {{/if}}
/>
<p class="error-description"></p>
`;
