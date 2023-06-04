


document.querySelector('button').addEventListener('click', () => {
    var data = "";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            let html = ''
            let res = JSON.parse(this.responseText).data

            res.forEach(item => {
                console.log(item);
                html += `<p> ${item} </P>`
            });
            document.querySelector('.cai').innerHTML = html
            console.log(res);
        }
    });
    xhr.open("GET", "https://eolink.o.apispace.com/eat222/api/v1/forward/chishenme?size=5");
    xhr.setRequestHeader("X-APISpace-Token", "pti7sth5ybju3cwssfx7x064jaehslyo");
    xhr.setRequestHeader("Authorization-Type", "apikey");

    xhr.send(data);
})
