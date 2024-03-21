const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const resultDiv = document.querySelector('.resultDiv');
const recommendations = document.getElementById('recommendations');

function searchRecommendations() {
    resultDiv.innerHTML = '';
    const input = recommendations.value.toLowerCase();
    let searchParam = '';
    if (input === 'beach' || input === 'beaches') {
        searchParam = 'beaches';
    } else if (input === 'temple' || input === 'temples') {
        searchParam = 'temples';
    } else if (input === 'country' || input === 'countries') {
        searchParam = 'countries';
    }

    fetch('travel_recommendation_api.json')
        .then((response) => response.json())
        .then((data) => {
            let destinations = null;
            if (searchParam === 'countries') {
                destinations =
                    data.countries[
                        `${Math.floor(Math.random() * data.countries.length)}`
                    ].cities;
            } else {
                destinations = data[`${searchParam}`];
            }
            if (destinations) {
                console.log(destinations);
                let destinationDetails = '';
                destinations.forEach((destination) => {
                    destinationDetails = `  <div class='outputDiv'>
                                            <img src='img/${destination.imageUrl}' class='resultImg'>
                                            <h2 class='resultHead'>${destination.name}</h2>
                                            <p class='resultPara'>${destination.description}</p>
                                            </div>`;
                    console.log(destinationDetails);
                    resultDiv.innerHTML += destinationDetails;
                });
            }
        });
}

btnSearch.addEventListener('click', searchRecommendations);

function clearResults() {
    resultDiv.innerHTML = '';
}

btnReset.addEventListener('click', clearResults);
