import React, { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

export default function Headers() {
  const [joke, setJoke] = useState("random dad joke");
  const fetchDadJoke = async () => {
    try {
      const res = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(res);
    } catch (error) {}
  };
  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        Random Joke
      </button>
      <p className="dad-joke"></p>
    </section>
  );
}
