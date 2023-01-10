import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { LocationProvider } from "./contexts/LocationContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true, // 데이터가 stale 상태일 경우, mount(사용가능한 상태로 만들 때) 시 마다 refetch를 실행하는 옵션
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      useErrorBoundary: true,
    },
  },
});

root.render(
  // <React.StrictMode>
  <LocationProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </LocationProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
