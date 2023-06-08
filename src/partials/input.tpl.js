export default `
{{#with item}}
  <div class='{{wrapperClass}}'>
    <label for={{id}} class='input__label'>
      {{label}}
    </label>
    <input
      id={{id}}
      placeholder='{{placeholder}}'
      type={{type}}
      class='input__element'
      pattern={{pattern}}
      minlength={{min}}
      maxlength={{max}}
      min={{min}}
      max={{max}}
      autocomplete={{autocomplete}}
    />
  </div>
{{/with}}
`;
