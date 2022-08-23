import {CityType, GovernmentBuildings} from "../02-objects/02-types";

export type CourseType = {
    title: string
    price: number
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const getCheapestCourses = (courses: Array<CourseType>) => {
    return courses.filter(c => c.price > 160);
}

export const getCompletedTasks = (tasks: Array<TaskType>) => {
    return tasks.filter(t => t.isDone);
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildings>, staff: number) => {
    return buildings.filter(b => b.staffCount > staff);
}