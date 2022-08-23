import {
    CourseType,
    demolishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen,
    getCheapestCourses,
    getCompletedTasks,
    TaskType
} from "./04";
import {CityType} from "../02-objects/02-types";



const newCity: CityType = {
    title: "New York",
    houses: [
        {
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
        {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        },
        {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        },
    ],
    governmentBuildings: [
        {
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                }
            }
        },
        {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {
                    title: 'South Str'
                }
            }
        }
    ],
    citizensNumber: 1000000
}




test('should take courses cheaper than 160', () =>{
    const courses: Array<CourseType> = [
        {title: 'Html', price: 110},
        {title: 'Css', price: 200},
        {title: 'Js', price: 300},
    ]

    const result: Array<CourseType> = getCheapestCourses(courses);

    expect(result.length).toBe(2);
    expect(result[0].title).toBe('Css');
    expect(result[1].price).toBe(300);
})

test('get only completed tasks', () => {
    const tasks: Array<TaskType> = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const result:Array<TaskType> = getCompletedTasks(tasks);

    expect(result.length).toBe(2);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(4);

})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(newCity, 'Happy street');

    expect(newCity.houses.length).toBe(1);
    expect(newCity.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(newCity.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})