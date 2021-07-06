import { retry } from "ts-retry-promise";
import {
  API_RETRIES_DELAY,
  DEFAULT_API_RETRIES,
} from "../../screens/home/constants";

class Api {
  async get(url: string, retries = DEFAULT_API_RETRIES) {
    try {
      return await retry(
        async () => {
          const response = await fetch(url);
          const body = await response.text();
          try {
            return JSON.parse(body);
          } catch (error) {
            throw new Error(`Invalid response for url '${url}': ${body}`);
          }
        },
        { retries, delay: API_RETRIES_DELAY }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const api = new Api();
export default api;
