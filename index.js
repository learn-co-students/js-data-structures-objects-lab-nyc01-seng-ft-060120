// Write your solution in this file!
const driver = {}


function updateDriverWithKeyAndValue(obj, key, value) { //3 args - driver, object, key and value
    //should not mutate the driver
    //return a new driver with an updated value for the key passed in
    return Object.assign({}, obj, { [key]: value });
}; 

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) { //same as above 
    //but mutates the drive passed in 
    obj[key] = value;
    return obj;
}; 

function deleteFromDriverByKey (driver, key){ //take in driver object and a key 
    //delete the key/value pair for the key passed in from driver object
    //don't mutate the driver passed in
    const newObj = Object.assign({}, driver);

    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromDriverByKey(driver, key) { //same as above
    //but mutate drive passed in - dot or bracket notation
    delete driver[key];
    return driver;
};