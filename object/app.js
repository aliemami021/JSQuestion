import users from "./users.js"

function groupByCountry() {
    let obj = {};
    let countries = users.map(item => item.country);
    let uniqContries = Array.from(new Set(countries));
    uniqContries.map((item, index) => {
        obj[item] = {}
    })

    for (let key in obj) {
        obj[key] = users.filter(item => item.country == key)

    }
    return obj
}

groupByCountry();






function groupByGender() {
    let obj = {};
    let gender = users.map(item => item.gender);
    let uniqGender = Array.from(new Set(gender));
    uniqGender.map((item, index) => {
        obj[item] = {}
    })

    for (let key in obj) {
        obj[key] = users.filter(item => item.gender == key)

    }
    return obj
}

groupByGender();




