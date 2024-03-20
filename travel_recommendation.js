const btnSearch = document.getElementById('btnSearch')
const btnReset = document.getElementById('btnReset')

function searchRecommendations() {
    const input = document.getElementById('recommendations').value.toLowerCase()
    console.log(input)
        fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data[`${input}`])
        })
}

btnSearch.addEventListener('click', searchRecommendations);