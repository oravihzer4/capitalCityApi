let content = document.getElementById("content");

function startFn() {
  let userInput = document.getElementById("userInput").value;
  axios
    .get(`https://restcountries.com/v3.1/capital/${userInput}`)
    .then((data) => {
      console.log(data.data);
      let myData = data.data;
      for (let i = 0; i < myData.length; i++) {
        console.log(myData[i].name.common);
        console.log(myData[i].flag);
        content.innerHTML = `Country Name: ${myData[i].name.common}<br>
        Flag: ${myData[i].flag}<br>
        Population: ${myData[i].population}<br>
        continents: ${myData[i].continents[0]}<br>
        `;
      }
    });
}
