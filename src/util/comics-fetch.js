export async function comicsFetch (requestName, params) {

   const requests = {
      [REQUESTS.GET_COMICS] : async function({id}) {
         return await fetch(`https://any-api.com:8443/http://xkcd.com/${id}/info.0.json`);
     }
   }

   
   if (requests[requestName]) {
      let data;

      try {
         data = await requests[requestName](params);
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