import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    // Add event listener to elements with IDs that start with "pet"
    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target

            if (itemClicked.id.startsWith("pet")) {
                const [, petPrimaryKey] = itemClicked.id.split("--")

                for (const petObject of pets) {
                    if (petObject.id === parseInt(petPrimaryKey)) {
                        const assignedWalker = walkers.find(walker => walker.id === petObject.walkerId)
                        window.alert(`${petObject.name} is being walked by ${assignedWalker.name}`)
                    }
                }
            }
        }
    )

    return petHTML
}
