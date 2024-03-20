const btnSearch = document.getElementById('btnSearch')
const btnReset = document.getElementById('btnReset')

function searchRecommendations() {
    const input = document.getElementById('recommendations').value.toLowerCase();
    let searchParam = ''
    if (input === 'beach' || 'beaches') {
        searchParam = "beaches"
    } else if (input === 'temple' || 'temples') {
        searchParam = 'temples'
    } else if (input === 'country' || 'countires') {
        searchParam = 'countires'
    }
    console.log(`Input: ${input}`)
    console.log(`Search param: ${searchParam}`)
        fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data[`${searchParam}`])
        })
}

btnSearch.addEventListener('click', searchRecommendations);