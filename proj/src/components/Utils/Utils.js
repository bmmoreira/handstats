
import Axios from "axios";

export  async function createEntry(entry,token,base_url,collection_name) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const updateResponse = await Axios
        .post(`${base_url}/${collection_name}`, entry, { headers })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          console.log(error);
        });
    } catch (error) {
      console.log(updateResponse);
      
    }
  }

  export async function getEntries(token,base_url,collection_name) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const responseData = await Axios
        .get(`${base_url}/${collection_name}`, { headers })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          console.log(error);
        });

      return responseData;
    } catch (error) {
      console.log(updateResponse);
      
    }
  }