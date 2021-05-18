import format from 'date-fns/format';

// Fixes issue of returned date being off due to time offset
const calculateDate = (date) =>
  new Date(
    new Date(date).getTime() + new Date(date).getTimezoneOffset() * 60000
  );

// Return date as a string
function formatDate(date) {
  return format(calculateDate(date), 'MMMM yyyy');
}

function createDateRange(start, end, toPresentValue) {
  const startDate = start ? formatDate(start) : 'unknown';
  const endDate = toPresentValue
    ? 'present'
    : end === ''
    ? 'unknown'
    : formatDate(end);

  return `${startDate} to ${endDate}`;
}

function capitalizeString(str) {
  const firstLetter = str.slice(0, 1).toUpperCase();
  const newString = firstLetter + str.slice(1);

  return newString;
}

function convertPhoneToHREF(phone) {
  const phoneHREF = phone.replace(/[ \-()]/g, '');

  return phoneHREF;
}

export { capitalizeString, convertPhoneToHREF, createDateRange };
