const fetchCoinsAPI = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const currencies = await fetch(url);
  const data = await currencies.json();
  return data;
};
// Foi criado um arquivo separado para a utilização da API para organizar melhor o código.
export default fetchCoinsAPI;
