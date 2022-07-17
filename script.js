var dj = document.getElementById('getCompanyName')

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e2961b39e4947732aefb342da7884de8

try{
async function getWeatherData() {
    var companyName = document.getElementById('companyName').value
    console.log(companyName)
    var data = await fetch(`https://api.openbrewerydb.org/breweries/${companyName}`)
    var res = await data.json()
    console.log(res)

    dj.innerHTML = `<div class="row g-0">
       <div class="col-md-4">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1TcL-r8PCSp64VrxmB9VeJyzyfMBN-0u5g&usqp=CAU">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">Name: ${res.name} </h5>
           <p class="card-text">Type: ${res.brewery_type}</p>
           <p class="card-text">Address: ${res.street},           
           ${res.city},
           ${res.state},
           ${res.country},${res.postal_code}</p>
           <p class="card-text">Website: ${res.website_url}</p>
           <p class="card-text">Phone no: ${res.phone}</p>
           <p class="card-text"><small </small></p>
         </div>
       </div>
     </div>
     
   `
}}

catch{
    console.log("Error")
}
