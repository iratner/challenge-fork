/**
 * This function handles requests for the application.  Pass in a request name using
 * the REQUESTS constants defined after this function.  Params is a map of values.
 * 
 * TODO: Add better parameter handling when params are missing...
 * 
 * @param {string} requestName - the name of the request 
 * @param {*} params 
 */
export async function comicsFetch (requestName, params) {

   // This defines each request using the REQUESTS constants defined below
   const requests = {
      [REQUESTS.GET_COMICS] : async function({id}) {
         const response = await fetch(`https://any-api.com:8443/http://xkcd.com/${id}/info.0.json`);
         return await response.json();
     }
   }

   /********************************************************************************* 
      We wrap each request type it a try/catch here so we can easily handle server errors in
      a reusable way
   *********************************************************************************/

   if (requests[requestName]) {
      let data;

      try {
         data = await requests[requestName](params);
         console.log(data);
      } catch(e) {
         console.error(`Something went wrong with server request: ${requestName}`, e);
      } finally {
         return data;
      }
      
   }

};

export const REQUESTS = {
   GET_COMICS : 'getComics'
}