window.addEventListener('DOMContentLoaded', () => {
  const inputAvatar = document.querySelector('#input-avatar');
  const formContainer = document.querySelector('#form-container');
  const inputSearch = document.querySelector('#search-input');

  formContainer.addEventListener('click', () => {
    inputAvatar.click();
  })

  inputAvatar.addEventListener('change', () => {
    formContainer.submit();
  })

  inputSearch.addEventListener('change', (event) => {
    console.log(event.srcElement.value);
  })

})