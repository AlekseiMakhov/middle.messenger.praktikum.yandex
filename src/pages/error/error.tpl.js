export default `
<main class='error-page-layout'>
  {{> header text=error.status class='error-status mb-20' }}
  {{> text text=error.message class='error-message mb-70' }}
  {{> link label=link.label href=link.href }}
</main>
`;
