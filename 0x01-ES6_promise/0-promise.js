export default function getResponseFromAPI() {
  const success = false;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}
