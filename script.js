// Write your JavaScript code here!

let pilotName;
let copilotName;
let fuelLevel;
let cargoMass;

let launchStatus;

let faultyItems;
let pilotStatus;
let copilotStatus;
let fuelStatus;
let cargoStatus;

window.addEventListener("load", function() {
  pilotName = document.querySelector("input[name=pilotName]");
  copilotName = document.querySelector("input[name=copilotName]");
  fuelLevel = document.querySelector("input[name=fuelLevel");
  cargoMass = document.querySelector("input[name=cargoMass]");

  launchStatus = document.querySelector("#launchStatus");

  faultyItems = document.querySelector("#faultyItems");
  pilotStatus = document.querySelector("#pilotStatus");
  copilotStatus = document.querySelector("#copilotStatus");
  fuelStatus = document.querySelector("#fuelStatus");
  cargoStatus = document.querySelector("#cargoStatus");

   let form = document.querySelector("form");

   form.addEventListener("submit", function(event){

      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value == ""){
         alert("all fields are required!");
      }
      else if(!isNaN(pilotName.value)  || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("make sure all data is valid!");
      }
      else{
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch!`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch!`;
      }

      if(fuelLevel.value < 10000){
         alert("Not enough fuel for launch!");
         fuelStatus.innerHTML = "Not enough fuel for the flight!";
      }
      else{fuelStatus.innerHTML = "Enough fuel for launch!";}
      
      if(cargoMass.value > 10000){
         alert("Too much cargo mass for launch!");
         cargoStatus.innerHTML = "Shuttle is too heavy for launch!";
      }
      else{cargoStatus.innerHTML = "Cargo is not too heavy!";}
      
      if(cargoMass.value > 10000 || fuelLevel.value < 10000){
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
   
      }
      else{
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
      }

      event.preventDefault();
   });

   let missionTarget = document.querySelector("#missionTarget");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){

           let randomPlanet = Math.floor(Math.random() * json.length);

            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randomPlanet].name}</li>
               <li>Diameter: ${json[randomPlanet].diameter}</li>
               <li>Star: ${json[randomPlanet].star}</li>
               <li>Distance from Earth: ${json[randomPlanet].distance}</li>
               <li>Number of Moons: ${json[randomPlanet].moons}</li>
            </ol>
            <img src="${json[randomPlanet].image}">`;
            //console.log(json[2].name);
        });        
    });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
