export function fetchData() {
  let status = "pending";
  let result;

  const suspender = fetch("/data/mockData.json")
    .then((res) => res.json())
    .then(
      (data) => {
        status = "success";
        result = data;
      })
    .catch((err) => {
      status = "error";
      result = err;
    })

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      if (status === "success") throw result;
    },
  };
}
