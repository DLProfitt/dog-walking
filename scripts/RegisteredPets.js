import { getPets } from "./database.js"

const pets = getPets()

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
                        window.alert(`${petObject.name} barks at you`)
                    }
                }
            }
        }
    )

    return petHTML
}
