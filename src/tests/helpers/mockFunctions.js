export const mockFetch = (data) => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({data})
  })};

export const mockLocalStorage = (data) => {
  localStorage = {...data};
  localStorage.__proto__ = {
    /**
     * 
     * @param {String} key  The key to be set into the localStorage object.
     * @returns 
     */
    getItem(key) {
      return localStorage[key];
    },
    /**
     * 
     * @param {String} key The key to be set into the localStorage object.
     * @param {String} json a JavaScript Object Notation (JSON) string.
     */
    setItem(key, json) {
      localStorage[key] = json;
    }
  }
};