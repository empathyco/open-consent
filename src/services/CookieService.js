export default class CookieService {
   static _getExpirationDate() {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate);
    expirationDate.setMonth(expirationDate.getMonth() + 6);
    return expirationDate.toUTCString();
  }
  
  static acceptCookies() {
    if (window.blockCookiesScript && window.blockCookiesScript.unblock) {
      const expirationDate = this._getExpirationDate();
      document.cookie = 'BCConsent=true; expires=' + expirationDate;
      window.blockCookiesScript.unblock();
    } else {
      console.error(
        "Error: Cookies couldn't been blocked because of error with library"
      );
    }
  }

  static rejectCookies() {
    const expirationDate = this._getExpirationDate();
    document.cookie = 'BCConsent=false; expires=' + expirationDate;
  }

  static getCookieValue = (name) =>
    document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || "";
}
