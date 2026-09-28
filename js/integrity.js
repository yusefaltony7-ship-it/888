(function integrity() {
  window.FC = window.FC || {};
  window.FC.hydration = window.FC.hydration || {
    hydrated: false,
    restored: false,
  };

  function isHydrationError(e) {
    if (!e || !e.message) return false;

    return (
      e.message.includes('Hydration failed') ||
      e.message.includes('Unknown root exit status') ||
      e.message.includes('Minified React error #329')
    );
  }

  async function initSentry() {
    return new Promise((resolve, reject) => {
      if (typeof Sentry === 'undefined') {
        const mainScriptSrc = 'https://js.sentry-cdn.com/22bd8ca1f6881e70c2bce2559998c4bd.min.js';
        const tracingScriptSrc = 'https://browser.sentry-cdn.com/9.40.0/bundle.tracing.min.js';

        let mainScriptLoaded = false;
        let tracingScriptLoaded = false;

        const rejectTimeout = setTimeout(() => {
          reject(new Error('Sentry scripts failed to load within 10 seconds'));
        }, 10000);

        function onScriptLoad() {
          if (mainScriptLoaded && tracingScriptLoaded) {
            if (typeof Sentry !== 'undefined') {
              Sentry.init({
                dsn: 'https://22bd8ca1f6881e70c2bce2559998c4bd@o1260577.ingest.us.sentry.io/4507583744049152',
              });
              clearTimeout(rejectTimeout);
              resolve();
            }
          }
        }

        const mainScript = document.createElement('script');
        mainScript.src = mainScriptSrc;
        mainScript.onload = () => {
          mainScriptLoaded = true;
          onScriptLoad();
        };
        document.head.appendChild(mainScript);

        const tracingScript = document.createElement('script');
        tracingScript.src = tracingScriptSrc;
        tracingScript.onload = () => {
          tracingScriptLoaded = true;
          onScriptLoad();
        };
        document.head.appendChild(tracingScript);
      } else {
        resolve();
      }
    });
  }

  // We only recover from hydration/react #329 failures, and when this happens
  // in prod it is expected to be the first window error.
  var hasTriggeredErrorRecovery = false;

  window.addEventListener('error', () => {
    if (!hasTriggeredErrorRecovery && !(window.FC && window.FC.hydration && window.FC.hydration.hydrated)) {
      hasTriggeredErrorRecovery = true;
      document.body.click();
    }
  });

  setTimeout(() => {
    if (!window.FC.hydration.hydrated) {
      document.body.click();

      setTimeout(() => {
        if (!window.FC.hydration.hydrated) {
          initSentry().then(() => {
            // Not using inline on purpose, to make sure this works on all browsers
            let hydration = {};
            if (window.FC) {
              hydration = window.FC.hydration;
            }

            const error = new Error('Integrity restore failed');
            // Wait for datadog to initialize
            setTimeout(() => {
              console.error(error);
            }, 10000);

            Sentry.captureException(error, {
              extra: {
                hydration,
                userAgent: navigator.userAgent,
              },
            });
          });
        }
      }, 10000);
    }
  }, 10000);
})();
