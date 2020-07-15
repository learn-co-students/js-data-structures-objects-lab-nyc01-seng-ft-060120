const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign({}, driver, {[key]: value})
};

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign(driver, {[key]: value})
}

const deleteFromDriverByKey = (driver, key) => {
  const newDriver = Object.assign({}, driver)
  delete newDriver[key]
  return newDriver 
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver;
};