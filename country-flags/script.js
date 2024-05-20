// Using Rest countries API display all the country flags

function reqListener() {
    var result = JSON.parse(this.responseText);
    console.log(result);
    for(let key of result){

        console.log("Flags :",key.flags.png);
               
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();