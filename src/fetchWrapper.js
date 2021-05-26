const methods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

async function fetchCore(url, method = "GET", body = {}) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        {
          if (response.status < 400) {
            resolve(response.json());
          } else {
            reject(response.json());
          }
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function get(url) {
  return await fetchCore(url, methods.GET);
}

async function fetchDelete(url) {
  return await fetchCore(url, methods.DELETE);
}

async function post(url, body) {
  return await fetchCore(url, methods.POST, body);
}

async function put(url, body) {
  return await fetchCore(url, methods.PUT, body);
}

export default {
  get,
  post,
  put,
  fetchDelete,
};
