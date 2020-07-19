
const driver = {body: 'squish'};

function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = {}
    newDriver[key] = value
    const newNew = Object.assign({},driver, newDriver)
    return newNew;
};

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
    driver[key] = value;
    return driver
};

function deleteFromDriverByKey(driver, key){
    const newDriver = {...driver};
    delete newDriver[key]
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}


