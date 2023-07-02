export default `
<img class='chat-group__img' src={{avatar.src}} alt={{avatar.alt}} />
<h4 class='chat-group__name'>{{name}}</h4>
{{#if text}}
  <p class='chat-group__text'>{{text}}</p>
{{/if}}
<p class='chat-group__time'>{{timestamp}}</p>
{{#if count}}
  <div class='chat-group__count'>{{count}}</div>
{{/if}}
`;
