var customerName = 'bob';

function upperCaseCustomerName () {
  customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer () {
  bestCustomer = 'maybe bob';
}

const changeLeastFavoriteCustomer = 'tom';

function leastFavoriteCustomer () {
  const changeLeastFavoriteCustomer = 'bob';
}
