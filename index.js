// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key] : value})
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key, value) {
  const new_driver = Object.assign({}, driver)
  delete new_driver[key]
  return new_driver
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver[key]
  return driver;
}
