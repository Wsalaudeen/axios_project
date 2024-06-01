import React from "react";
import { useEffect } from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-store-products";

export default function FirstRequest() {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <h2 className="text-center">first request</h2>;
}
