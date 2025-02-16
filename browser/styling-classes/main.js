const container = document.getElementById('container')
const btn= document.getElementById('btn')

btn = addEventListener('click', function(){
  container.classList.toggle('container')     //add
  container.classList.toggle('text-center')    //add
  container.innerHTML = '<p>Hello js with css classes!</p>'
  })

