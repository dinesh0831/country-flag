

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
 {
     var t = JSON.parse(this.response);
     for(i=0;i<t.length;i++){
     country_name=(t[i].name)
     country_region=(t[i].region)
     country_population=(t[i].population)
     country_flag=(t[i].flag)
     country_capital=t[i].capital
    const flex=document.createElement("div");
    flex.setAttribute("class","flex")
    document.body.append(flex)
    // container for flag and info
    const division=document.createElement("div")
    division.setAttribute("class","container")
    flex.appendChild(division)
    // div for flag image
    const img=document.createElement("div")
    img.setAttribute("class","img")
    division.appendChild(img)
    // image tag
    const image=document.createElement("img")
    image.setAttribute("src",country_flag)
    image.setAttribute("class","image")
    img.appendChild(image)
    // div for info
    const info=document.createElement("div")
    info.setAttribute("class","info")
    division.appendChild(info)
    // for header and paragraph tag for info
     const name=document.createElement("h2");
     name.innerText=country_name;
     info.appendChild(name);
     const population=document.createElement("p")
     population.innerHTML="<b>Population:</b>"+country_population;
     info.appendChild(population);
     const region=document.createElement("p")
     region.innerHTML="<b>Region:</b>"+country_region;
     info.appendChild(region);
     const capital=document.createElement("p")
     capital.innerHTML="<b>Capital:</b>"+country_capital;
     info.appendChild(capital)
     
    
     }
}

 xhr.onerror = function () 
 {
     console.log("Error", this.statusText);
 };
     xhr.send();
     
     
     
    
     
    
     