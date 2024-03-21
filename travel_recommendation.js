const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const resultDiv = document.querySelector('.resultDiv');

function searchRecommendations() {
    resultDiv.innerHTML = '';
    const input = document
        .getElementById('recommendations')
        .value.toLowerCase();
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
            const destinations = data[`${searchParam}`];
            if (destinations) {
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
