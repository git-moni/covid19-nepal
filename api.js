var btn1 = document.getElementById("btn1");

btn1.addEventListener('click', () => {
	//fetch request to api
	fetch('https://corona.lmao.ninja/v2/countries/')
		.then((response) => {
			return (response.json());
		})
		.then((data) => {
			var results = document.getElementById('results');

			var template = `
<h4 class="mt-4">Covid Cases</h4>
`

			 data.filter((element) => {
                if (element.country === "Nepal") {
				template += `
		<ul class="list-group">
						<li class="list-group-item"><strong>Country:  ${element.country}</strong></li>
			 		    <li class="list-group-item"><strong>Total Cases:  ${element.cases}</strong></li>
			 		    <li class="list-group-item"><strong>Today Cases:  ${element.todayCases}</strong></li>
			 		    <li class="list-group-item"><strong>Total Deaths:  ${element.deaths}</strong></li>
			 		    <li class="list-group-item"><strong>Today Deaths:  ${element.todayDeaths}</strong></li>
			 		    <li class="list-group-item"><strong>Recovered:  ${element.recovered}</strong></li>
			 		    <li class="list-group-item"><strong>Active:  ${element.active}</strong></li>
			 		    <li class="list-group-item"><strong>Critical:  ${element.critical}</strong></li>
			 		    <li class="list-group-item"><strong>Population:  ${element.population}</strong></li>
			 	</ul>
			 			`
                }
			})

			results.innerHTML = template;
		})
})