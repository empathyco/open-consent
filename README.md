# Open-Consent  
Our beautiful consent CMP—now it’s yours!

## What is OpenConsent
https://github.com/user-attachments/assets/68d39b52-f8a7-48e3-ae4d-180fa3bc970b

As you can see in the video, OpenConset can be manage cookies in your website. You always find a cookie called BCconsent which is true will allow cookies from web and if this flag is false will be block cookies from a cookie blacklist. That's it.


## Guide  

### How to Customize the CMP  

You can customize many aspects of the project.  

- **Visual Customizations:**  
  You can modify visual elements such as colors, positions, and sizes.  
  - **Directory:** `src/App.vue`  
    In this file, you will find an object called `customization`, which contains all the default settings. Adjust these settings as needed to suit your preferences.  

- **Cookie Providers:**  
  You can select the cookie providers you want to block.  
  - **Directory:** `src/cookieBlackList`  
    In this file, you will find an object named `window.COOKIES_BLACKLIST`. Add or remove cookie providers as necessary.  

---

### How to Deploy the OpenConsent App  

#### Local Deployment  
You can deploy this project locally to test features or try out modifications.  

Since this is a Vue.js project, execute the following commands:  

```bash
npm install  
npm run dev
```

### How to Add OpenConsent to Your Own Project
We recommend deploying OpenConsent via a cloud service (e.g., AWS S3) and injecting the script into your project.

This project is designed to seamlessly integrate with your HTML and CSS without causing conflicts. We achieve this by using technology that isolates our HTML and CSS from yours.
