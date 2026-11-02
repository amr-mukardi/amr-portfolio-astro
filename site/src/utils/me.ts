export const name = "عمرو المكردي";
export const homepage_url = "https://amr-portfolio-astro.vercel.app/";
export const linkedin_username = "amr-mukardi";
export const github_username = "amr-mukardi";

/*=============================================================================\
 | The email and phone number fields below are Base64 encoded to     |
 | obfuscate them in the source code.  To update them, encode the data in      |
 | Base64 and paste the output as a string argument to the corresponding       |
 | `atob()` function below.                                                    |
 |                                                                             |
 | Mac command to Base64 encode (and copy the encoded data to the clipboard):  |
 |                                                                             |
 |     echo -n 'amralmukardi@gmail.com' | base64 | pbcopy                    |
 |                                                                             |
 | Linux command to Base64 encode:                                             |
 |                                                                             |
 |     echo -n 'amralmukardi@gmail.com' | base64                             |
 |                                                                             |
 | JavaScript command to Base64 encode:                                        |
 |                                                                             |
 |     btoa('amralmukardi@gmail.com')                                        |
 |                                                                             |
 \============================================================================*/
const email_base64_encoded = "YW1yYWxtdWthcmRpQGdtYWlsLmNvbQ==";
const phone_base64_encoded = "Kzk2NzczNzE2ODAzOA==";


// The data is decoded and exported below. Do not edit below this line.
export const email = atob(email_base64_encoded);
export const phone = atob(phone_base64_encoded);

// Helper code for creating URLs from the above data.
export const linkedin_short = `linkedin.com/in/${linkedin_username}`;
export const linkedin_url   = `https://www.linkedin.com/in/${linkedin_username}`;
export const name_en = "Amr AL-Mukardi";
export const whatsapp_url = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
export const github_url = `https://github.com/${github_username}`;
