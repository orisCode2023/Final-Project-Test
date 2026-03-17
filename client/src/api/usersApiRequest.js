const BASE_URL = 'http://localhost:3000';

export async function apiRequestresWithBody(path, method, bodyData) {
  try {
    const response = await fetch(BASE_URL + path, {
      method: method,
      credentials: 'include',
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
export async function apiRequestresWithoutBody(path, method) {
  try {
    const response = await fetch(BASE_URL + path, {
      method: method,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response) {
      throw new Error("loading data faild");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error loading data", error.message);
    throw error;
  }
}
