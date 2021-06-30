class Api {
  async get(url: string) {
    try {
      const response = await fetch(url);
      const res = await response.json();
      const parsed = JSON.parse(res);
      return parsed;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

const api = new Api();
export default api;
