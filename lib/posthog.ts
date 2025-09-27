import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init('phc_rOmQSvYOQlk6s8rxotBwNNs0FMZ9pgib39VCjqtpHxR', {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
    autocapture: true,
    capture_pageview: true,
    persistence: 'localStorage',
    disable_session_recording: false,
    enable_recording_console_log: true,
  })
}