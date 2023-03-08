import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    // Add event listener to list items with IDs that start with "walker"
    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target

            if (itemClicked.id.startsWith("walker")) {
                const [, walkerId] = itemClicked.id.split("--")

                for (const walkerObject of walkers) {
                    if (walkerObject.id === parseInt(walkerId)) {
                        window.alert(`${walkerObject.name} services ${walkerObject.city}`)
                    }
                }
            }
        }
    )

    return walkerHTML
}
