burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click',()=>{
     rightNav.classList.toggle('v-class-resp')
     navList.classList.toggle('v-class-resp')
     navbar.classList.toggle('h-nav-resp')
})
const name = document.getElementsById('name')
const password = document.getElementsById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
  if (messages.length > 0) {
     e.preventDefault()
     errorElement.innerText = messages.join(', ')
   }

})
handlecard(text) {
  let formattedText = text.split(' ').join('');
  if (formattedText.length <= 16) {
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
  } else {
    alert("plz stop here")
  }
  this.setState({ creditCard: formattedText });
  return formattedText;
}