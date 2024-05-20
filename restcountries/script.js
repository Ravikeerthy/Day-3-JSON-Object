// Using the rest countries API print all the names, regions, sub-region and population

function reqListener() {
    var result = JSON.parse(this.responseText);

    console.log(result);

    for(let key of result){
        console.log("Country Name : ",key.name.common);
        
        console.log("Population : ",key.population);
        
        console.log("Regions : ", key.region);

        console.log("Sub-Region : ", key.subregion);
        
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();