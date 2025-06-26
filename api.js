function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url.startWith("http")) {
        return reject(new Error("Invalid URL"));
      }
      resolve({ data: `Payload from ${url}` });
    }, 1000);
  });
}

// Usage
fetchDataPromise("http://api.example.com")
  .then((result) => {
    console.log("Received Successfully:", result.data);
    return fetchDataPromise("/bad-url");
  })
  .catch((err) => {
    console.error("Error Occurred:", err);
  });
