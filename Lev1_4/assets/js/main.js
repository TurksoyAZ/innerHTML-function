



let div1=document.getElementById("tria");
div1.innerHTML= "<h1> Hello h1</h1>"
div1.innerHTML+= "<a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date'>Link</a>";

//  "", ''; ‘‘ könnten getauscht werden.
let div2=document.getElementById("hers");




div2.innerHTML = '<p>Hallo <b id="test2">Freund</b> </p>';
div2.innerHTML += '<input type="text" id="userInput" value="Saddam"/>'
div2.innerHTML += '<input type="button" onclick="deyish()" value="Turksoy" />'

function deyish() {
    let elsa=document.getElementById("userInput").value;
    document.getElementById("test2").innerHTML= elsa;
}

// 1-funksiya tikla emrine verilir __onclick="deyish()"__
// 2-birinci verilen inputun id-si gösterilerek, emir __value="Saddam"-a__ tetbiq edilir
// 3- sonda  __id="test2"__   ile   __let elsa=document....__  birlesdirilir.




