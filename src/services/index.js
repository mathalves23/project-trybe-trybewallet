const coinsApi = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const currencies = await fetch(url);
  const data = await currencies.json();
  return data;
};

export default coinsApi;
