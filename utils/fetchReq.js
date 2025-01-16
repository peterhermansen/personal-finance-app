export default function fetchReq(location, obj, setter) {
  fetch(`api/${location}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => setter(data))
    .catch((err) => console.error(`Error updating ${location}`, err));
}
