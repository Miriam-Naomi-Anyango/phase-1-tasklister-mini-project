document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', function (event){
    event.preventDefault()
    let ul = document.querySelector('#tasks')
    let li = document.createElement('li')
    let input = document.querySelector('#new-task-description')
    li.textContent = input.value
    ul.appendChild(li)
    form.reset()
  })
});

