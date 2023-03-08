export const filteredByName = (data, event) => {
  return data?.filter((obj) =>
    obj.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
};

export const filteredByUrl = (data, event) => {
  return data?.filter((obj) => obj.url.includes(event.target.value));
};

export const filterByCategory = (data, category) => {
  const gamesArray = [];
  data?.filter((obj) => {
    if (obj.category === category) {
      gamesArray.push(obj);
    }
    return obj;
  });
  return gamesArray;
};
