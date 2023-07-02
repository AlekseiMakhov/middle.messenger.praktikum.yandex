export default `
<main class='chat-layout'>
  {{{search}}}
  <ul class='chat-groups'>
    {{#each chatGroups}}
      {{{this}}}
    {{/each}}
  </ul>
  {{{profileLink}}}
  <div class='chats-field'>
    {{#if group}}
      <div class='chats-field__group'>
        <img class='chats-field__avatar' src={{group.avatar.src}} alt={{group.avatar.alt}} />
        <h4 class='chats-field__name'>{{group.name}}</h4>
      </div>
      {{#if messages}}
        <div class='chats-field__messages'>
        {{#each messages}}
          {{{this}}}
        {{/each}}
        </div>
      {{/if}}
    {{else}}
    <p class='chats-field_empty'>
      Выберите чат, чтобы отправить сообщение
    </p>
    {{/if}}
  </div>
  <form class='chat-message'>
    {{{messageInput}}}
    {{{messageSendButton}}}
  </form>
</main>
`;
