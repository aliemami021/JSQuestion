// first 
function myFunc(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}


function func(item, index, array) {
  
}


myFunc(test, func);

// secound

// ------------------------1

function getEmails(data) {
  return data.map(item => item.email);
}
getEmails();

// ------------------------2

function getIranianUsers(users) {
  const iranianUsers = users.filter(user => user.country === "Iran");
  const result = iranianUsers.map(user => ({ name: user.firstName, lastName: user.lastName }));
  return result;
}
getIranianUsers();

// ------------------------3

function getNonBinaryUsers(users) {
  const nonBinaryUsers = users.filter(user => user.gender === "Non-binary");
  const result = nonBinaryUsers.map(user => ({ name: user.firstName, bankBalance: user.balance }));
  return result;
}
getNonBinaryUsers();

// ------------------------4

function getAmericanEmails(users) {
  const richAmericans = users.filter(user => user.country === "United States" && user.balance > 500000);
  const result = richAmericans.map(user => user.email);
  return result;
}
getAmericanEmails();

// ------------------------5

function getSortedBalance(users) {
  const iranians = users.filter(user => user.country === "Iran");
  const sortedIranians = iranians.sort((a, b) => b.balance - a.balance);
  const result = sortedIranians.map(user => user.firstName + " " + user.lastName);
  return result;
}
getSortedBalance();

// ------------------------6

function getEmailsLong(users) {
  const filteredUsers = users.filter(user => user.email.length > 30);
  const result = filteredUsers.map(user => user.firstName + " " + user.lastName);
  return result;
}
getEmailsLong();

// ------------------------7

function getEduEmails(users) {
  const filteredUsers = users.filter(user => user.email.endsWith(".edu"));
  const result = filteredUsers.map(user => user.balance);
  return result;
}
getEduEmails();

// ------------------------8



















//18----------------------

