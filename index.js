// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
    return newDriver.assign({}, driver, { [key]: value }); 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return driver;
  }

function deleteFromDriverByKey(driver, key)  {
    const driverKey = newDriver.assign( {}, driver);

    delete driverKey[key];

    return driverKey;
}

function destructivelyDeleteFromDriversByKey(driver, key){
    delete driver[key];

    return driver
}
