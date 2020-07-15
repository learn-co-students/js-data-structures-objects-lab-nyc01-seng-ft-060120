// Write your solution in this file!
const driver = new Object;

function updateDriverWithKeyAndValue(object, key, value) {
    let newObject = {...object};
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromDriverByKey(object, key) {
    let newObject = Object.assign({}, object);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;
}