import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, param) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAPI = () => {
    if (url === "location" || url === "search") {
      const params =
        url === "location"
          ? { params: { address: param } }
          : { params: { saddress: param } };

      return axios
        .get("/api/" + url, params)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => setError(error));
    } else if (url === "all") {
      return axios
        .all([
          axios.get("/api/toptm"),
          axios.get("/api/topspt"),
          axios.get("/api/today"),
          axios.get("/api/card"),
        ])
        .then(
          axios.spread((res1, res2, res3, res4) => {
            setData({
              toptm: res1.data,
              topspt: res2.data,
              today: res3.data,
              card: res4.data,
            });
            setLoading(false);
          })
        )
        .catch((err) => setError(err));
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return { data, loading, error };
}
