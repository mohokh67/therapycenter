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
      sessionDuration: process.env.BOOKING_SESSION_DURATION,
      dayBeginsAt: process.env.BOOKING_DAY_BEGINS_AT,
      dayEndsAt: process.env.BOOKING_DAY_ENDS_AT,
      dayBreakBeginsAt: process.env.BOOKING_DAY_BREAK_BEGINS_AT,
      dayBreakEndsAt: process.env.BOOKING_DAY_BREAK_ENDS_AT
    },
    applicationName: process.env.APPLICATION_NAME
  }
};
