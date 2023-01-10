import React, { createContext, useContext, useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";

const LocationContext = createContext();
const locaStorageLocation = "충청남도 아산시 모종동";

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(
    localStorage.getItem("location")
      ? localStorage.getItem("location")
      : locaStorageLocation
  );
  const [locationQuery, setLocationQuery] = useState({
    error: false,
    status: null,
    succ: false,
  });

  const useUpdateLocation = (locationData) => {
    // 검색할 때 사용
    const query = useLocationApi(locationData);
    const { data, error, status, isSuccess } = query;

    if (isSuccess) {
      setLocationQuery({ error: false, status: null, succ: true });
      setLocation(data);
      localStorage.setItem("location", data);
    }
    if (error) {
      setLocationQuery({ error: true, status: status, succ: false });
    }
  };

  return (
    <LocationContext.Provider
      value={{ location, locationQuery, useUpdateLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};

const useLocationApi = (location) => {
  if (!location) location = locaStorageLocation;

  const { locationQuery } = useLocation(location);

  return locationQuery;
};

export const useLocationContext = () => useContext(LocationContext);
