import axios from "axios";

const httpClient = axios.create({
  baseURL: "/api/",
});

export async function setLocation(address) {
  if (address === undefined) return;

  try {
    return await httpClient
      .get("location", {
        params: {
          // address: "충청남도 아산시 모종동",
          address: address,
        },
      })
      .then((res) => res.data);
    // .catch((error) => console.log(error));
  } catch (e) {
    return e;
  }
}

export async function getToptm() {
  try {
    return httpClient.get("toptm").then((res) => res.data);
  } catch (e) {
    return e;
  }
}

export async function getTopspt() {
  try {
    return httpClient.get("topspt").then((res) => res.data);
  } catch (e) {
    return e;
  }
}

export async function getSearchList(keyword) {
  try {
    return httpClient
      .get("search", {
        params: {
          saddress: keyword,
        },
      })
      .then((res) => res.data);
  } catch (e) {
    return e;
  }
}
