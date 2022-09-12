async function getAddress(estado) {
  console.log(estado);
  fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`,
    { method: "GET", headers: {} }
  )
    .then((response) => response.json())
    .then((result) => {
      const dtList = document.querySelector("#city");
      dtList.innerHTML = '';
      document.querySelector('#cidades').value = '';

      result.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.nome;
        option.innerText = item.nome;
          dtList.append(option);
      });
    });
}

(() => {
  document
    .querySelector("#estados")
    .addEventListener("change", (e) => getAddress(e.target.value));
})();
