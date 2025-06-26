// Classic Node-style API
function fetchDataCallback(url, callback) {
  setTimeout(() => {
    if (!url.startsWith("https")) {
      return callback(new Error(`Invalid URL: ${url}`));
    }
    callback(null, { data: `Payload froom ${url}` });
  }, 1000);
}

// Usage
fetchDataCallback("http://api.example.com", (err, result) => {
  if (err) {
    console.error("Fetch failed:", err);
    return;
  }
  console.log("Received Successfully:", result.data);
});
