import format from 'date-fns/format';

// Fixes issue of returned date being off due to time offset
const calculateDate = (date) =>
  new Date(
    new Date(date).getTime() + new Date(date).getTimezoneOffset() * 60000
  );

// Return date as a string
export const formatDate = (date) => format(calculateDate(date), 'MMMM yyyy');
