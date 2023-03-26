const form = document.querySelector('#form')
const content = document.querySelector('.content')
async function getData(info) {
  const basic = 'https://en.wikipedia.org/w/api.php?action='
  const query = `query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${info}`

  const request = await fetch(basic+query)
  const data = await request.json()
  return data
}
function upDateUi(data) {
  console.log(data);

  data.query.search.forEach(items => {
    console.log(items);
    content.innerHTML += `
    
    <h2>${items.title}</h2>
    
    <div>
      <p>
        ${items.snippet}
      </p>
    </div>
    <br>

  `
  });
 
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputVal = form.input.value
  console.log(inputVal);
  form.reset()
  content.innerHTML = ''
  getData(inputVal)
    .then((data) => upDateUi(data))

})
