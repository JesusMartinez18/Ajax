const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {

  if(request.readyState === 4 && request.status === 200){
    console.log(rquest, request.responseText);
  } else if(request.readyState === 4){
    console.log('could not fetch the date');
  }
});

request.open('GET', 'https://jsonplaceholder.typicodes.com/todoss/');
request.send();
