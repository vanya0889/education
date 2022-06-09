function xhrGet(url) {
  return new Promise((resolve, reject) => {

	let web = new XMLHttpRequest();
	web.open("GET", url, true);
	web.setRequestHeader("Content-Type", "application/json");
	web.responseType = "json";
	web.onload =  function () {
	  if (web.status > 199 && web.status <300) {
		resolve(web.response)
	  } else {
		reject(web.response)
	  }
	}

	web.send();


  })


  // let web = new XMLHttpRequest();
  // web.fetch(url, {
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(data)
  // })
  //
  //   .then(response => response.status)
  //   .then(response => response.data)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch(error => alert(error.status));
  // return web;
}

window.xhrGet = xhrGet;

export default xhrGet;
