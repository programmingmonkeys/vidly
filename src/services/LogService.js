// import * as Sentry from '@sentry/react'
// import { Integrations } from '@sentry/tracing'

function init() {
  // Sentry.init({
  //   dsn: process.env.REACT_APP_SENTRY,
  //   release: 'mosh-course@' + process.env.npm_package_version,
  //   autoSessionTracking: true,
  //   integrations: [new Integrations.BrowserTracing()],
  //   // We recommend adjusting this value in production, or using tracesSampler
  //   // for finer control
  //   tracesSampleRate: 1.0,
  // })
}

function log(error) {
  // Sentry.captureException(error)
  console.error(error)
}

// eslint-disable-next-line
export default {
  init,
  log,
}
