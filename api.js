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

// Async Await
//* PROS = Very readable, linear control flow, straightforward try/catch
//^ CONS = Forgetting 'await' leads to subtle bugs, error stacks can be less precise

async function loadSequentially() {
  try {
    const result1 = await fetchDataPromise("http://api.example.com");
    console.log("First Result:", result1.data);

    const result2 = await fetchDataPromise("http://api.example.com/second");
    console.log("Second Result:", result2.data);
  } catch (err) {
    console.error;
  }
}

// Usage
loadSequentially();
