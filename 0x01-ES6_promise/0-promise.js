// Definition of the function prototype getResponseFromAPI()
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      // Simulated API response
      const apiResponse = { data: "API response data" };

      // Resolve the Promise with the API response
      resolve(apiResponse);

      // In case of an error during the API call, you can reject the Promise like this:
      // reject(new Error("API call error"));
    }, 2000); // Simulate a 2-second delay before receiving the API response
  });
}

export default getResponseFromAPI;

