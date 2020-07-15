

const driver = {};


// This function should not mutate the `driver` and should return a _new_ `driver` that has an updated
function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    // debugger
    newDriver[key] = value;
    // debugger
    return newDriver;
}

// driver.name = 'Sam';
// updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');


// it _should_ mutate the `driver parameter passed in.
  function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
      driver[key] = value;
      return driver;    
  }


 /* delete the `key`/`value` pair for the `key` that was
  passed in from the `driver` `Object`. This should all not actually mutate the
  `driver` passed in. */
  function deleteFromDriverByKey(driver, key) {
      const newDriver = {...driver};
      delete newDriver[key];
      return newDriver;
  }


  /*  Be sure and consider whether dot-notation or bracket-notation might affect your solution. */
  function destructivelyDeleteFromDriverByKey(driver, key) {
      delete driver[key];
      return driver; 
  }