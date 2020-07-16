// Write your solution in this file!

const driver = {};


function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({}, driver, { [key]: value });

}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driverObject, key) {
    const newObj = Object.assign({}, driver);

    delete newObj[key];
  
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
    delete driver[key];

    return driver;
}

