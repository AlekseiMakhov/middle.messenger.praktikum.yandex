export default `
  <form name={{name}} class='{{class}}'>
    {{#if header}}
      {{> header text=header class=headerClass }}
    {{/if}}
    <div class="{{elementsClass}}">
      {{#each inputs }}
        {{> input
          item=this
        }}
      {{/each}}
    </div>
    {{#if confirmLabel}}
      {{> button
        id=submitButtonId
        label=confirmLabel
        class=submitButtonClass
        type='button'
      }}
    {{/if}}
  </form>
`;
