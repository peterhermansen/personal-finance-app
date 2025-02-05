export default async function fetchReq(method, location, obj, setter) {
  try {
    let res;
    if (method === 'GET') {
      res = await fetch(`api/${location}`, {
        method: method,
      });
    } else {
      res = await fetch(`api/${location}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
    }

    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    const data = await res.json();

    if (setter) setter(data);

    return data;
  } catch (err) {
    console.error(`Error updating ${location}`, err);
  }
}
