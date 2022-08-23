import {CityType, GovernmentBuildings, HouseType} from "../02-objects/02-types";


export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildings>) => {
    return buildings.map(b => b.address.street.title)
}


export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const repairHouses = (city: CityType, year: number) => {
    city.houses = city.houses.map(h => {
        if (h.buildedAt < year && !h.repaired) {
            return {...h, repaired: true}
        }

        return h;
    })
}