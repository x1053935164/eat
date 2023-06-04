var data = "pageSize=3";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    let html = ''
    let res = JSON.parse(this.responseText).result
    console.log(res);
    res.forEach(item => {
      console.log(item);
      html += `<p> ${item.content} </P>`
    });
    document.querySelector('.zhu').innerHTML = html
    console.log(res);
  }
});
xhr.open("POST", "https://eolink.o.apispace.com/xhdq/common/joke/getJokesByRandom");
xhr.setRequestHeader("X-APISpace-Token", "pti7sth5ybju3cwssfx7x064jaehslyo");
xhr.setRequestHeader("Authorization-Type", "apikey");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);


