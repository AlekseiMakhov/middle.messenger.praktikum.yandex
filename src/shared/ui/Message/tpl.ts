export default `
<div class='message__container'>
  {{#if image}}
    <img class='message__image' src={{image.src}} alt={{image.alt}} />
  {{else}}
    <div class='message__text-container'>
      <p class='message__text'>{{text}}</p>
    </div>
  {{/if}}
  <p class='message__time'>{{timestamp}}</p>
</div>
`;
