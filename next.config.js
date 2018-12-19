require('dotenv').config();

module.exports = {
  // generate static pages
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    booking: {
      lifetimeInDays: process.env.BOOKING_DURATION_IN_DAYS,
      workingDays: process.env.BOOKING_WORKING_DAYS.split(','),
      nonWorkingDays: process.env.BOOKING_NON_WORKING_DAYS.split(','),
      sessionDuration: parseInt(process.env.BOOKING_SESSION_DURATION),
      dayBeginsAt: parseInt(process.env.BOOKING_DAY_BEGINS_AT),
      dayEndsAt: parseInt(process.env.BOOKING_DAY_ENDS_AT),
      freeToBook: process.env.BOOKING_AVAILABLE_HOUR_ALT_TEXT,
      alreadyBooked: process.env.BOOKING_UNAVAILABLE_HOUR_ALT_TEXT,
      nonWorkingDay: process.env.BOOKING_NON_WORKING_DAY_TEXT
    },
    applicationName: process.env.APPLICATION_NAME
  }
};
