import axios from "axios";
import { baseURL } from "./config";

export const createdocfromtemp = async (key, data) => {
  try {
    console.log(key,data)
    const header = {
      headers: {
        "Authorization": `API-Key ${key}`,
        "Content-Type": "application/json",

        // "Cookies":"visid_incap_2294548=BOM3/urTTpysiukXy0WRGbizX2MAAAAAQUIP/AAAAAACU7p8vm2uvTmcevHWJNLQa; visid_incap_2627658=5CVhaQyTRDqvD/OGnlM0Da6oX2MAAAAAQUIPAAAAAACnH5mbNvQLIUS+pRqKj95z; AWSALB=kZi302HxpInUNJk2pYSX/ZROB8rCK7RHmTc3NW6KXFvL9Km/uf493j22977RRPoOGHpTpPagdOy14UAzL6XntPlRqqsF0lf2DYuTo86L6YET7SgSZHjgDhNhiQ7L; AWSALBCORS=kZi302HxpInUNJk2pYSX/ZROB8rCK7RHmTc3NW6KXFvL9Km/uf493j22977RRPoOGHpTpPagdOy14UAzL6XntPlRqqsF0lf2DYuTo86L6YET7SgSZHjgDhNhiQ7L"
              },
    };
    
    // data.key = key ;
    const res = await axios.post(
      // baseURL+"/signdoc",
      "https://api.pandadoc.com/public/v1/documents",
      data,
      header
    );
    console.log(res)
    return res.data;
  } catch (err) {
    return err.message;
  }
};
