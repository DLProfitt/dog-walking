import { getWalkers, getCities, getWalkerCities } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
            const walkerCities = getWalkerCities().filter(wc => wc.walkerId === parseInt(walkerId))
            const cityNames = getCityNames(walkerCities)
            window.alert(`${itemClicked.textContent.trim()} services ${cityNames}`)
        }
    }
)

const getCityNames = (walkerCities) => {
    const cities = getCities()
    const cityNames = []
    for (const wc of walkerCities) {
        const city = cities.find(c => c.id === wc.cityId)
        if (city) {
            cityNames.push(city.name)
        }
    }
    return cityNames.join(", ")
}

export const Walkers = () => {
    let walkerHTML = "<ul>"
    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    walkerHTML += "</ul>"
    return walkerHTML
}
