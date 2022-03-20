// certificate validation
let select = document.querySelector('#courseSelection');
let cert = document.querySelector('#cert');
function getValue(){
  let selected = select.options[select.selectedIndex].text;
  if(selected === 'CERTIFICATION COURSES'){
    cert.innerHTML = '<p>Some Random Text</p>'
  }
}