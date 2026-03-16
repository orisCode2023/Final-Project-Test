const BASE_URL = 'http://localhost:3000';

export async function apiRequestresPost(path, method, bodyData) {
  try {
    const response = await fetch(BASE_URL + path, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    if (!response) {
      throw new Error("login faild");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("error login", error.message);
    throw error;
  }
}
export async function apiRequestresGet(path, method) {
  try {
    const response = await fetch(BASE_URL + path, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response) {
      throw new Error("loading data faild");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("error loading data", error.message);
    throw error;
  }
}
