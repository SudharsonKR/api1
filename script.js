async function fetchData(){
    try{
       const response = await fetch("https://isro.vercel.app/api/customer_satellites")
       const data = await response.json();
       const datanew = await data.customer_satellites;
       console.log(response)
       console.log(data);
       console.log(datanew);
       datanew.forEach(ele=>{
        const satel ={
            ...ele,
            Id : ele.id,
            Launcher : ele.launcher,
            Date :ele.launch_date,
            Country : ele.country
        }
        satellites(satel)
       })  
    }
    catch (error){
        console.log("Error Details:", error)
        document.body.innerHTML += `<h1>Facing Error</h1>`
    }

}

function satellites(elements){
    document.body.innerHTML += `
    <div class="container">
    <div class="info">
    <h5>Id: ${elements.Id}</h5>
    <h5>Launcher: ${elements.Launcher}</h5>
    <h5>Date: ${elements.Date}</h5>
    <h5>Country: ${elements.Country}</h5>
    </div>
    </div>
    `
    
}
fetchData()