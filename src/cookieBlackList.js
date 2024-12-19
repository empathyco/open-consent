const getCookieValue = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  );

  if (getCookieValue('BCConsent') === '' || getCookieValue('BCConsent') === 'false') {
    window.COOKIES_BLACKLIST = [
        /googletagmanager/,
        /snap\.licdn\.com/,
        /clarity\.ms/,
        /bat\.bing\.com/,
        /static\.hotjar\.com/
    ]
  } else if (getCookieValue('BCConsent') === 'true'){
    window.COOKIES_BLACKLIST = [];
  }