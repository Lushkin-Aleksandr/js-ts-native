import {GovernmentBuildings, HouseType} from "../02-objects/02-types";

export function addMoneyToBudget(building: GovernmentBuildings, amount: number) {
    building.budget += amount;
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildings, number: number) {
    building.staffCount -= number;
}

export function toHireStaff(building: GovernmentBuildings, number: number) {
    building.staffCount += number;
}

