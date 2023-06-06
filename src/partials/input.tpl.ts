{{#with item}}
<div class='input'>
  <label for={{id}} class='input__label'>
    {{label}}
  </label>
  <input
    id={{id}}
    placeholder="{{placeholder}}"
    type={{type}}
    class='input__element'
  />
</div>
{{/with}}
