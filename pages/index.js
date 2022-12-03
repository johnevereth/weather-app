import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=ottawa&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <div className="bg-black/40 z-[1] absolute top-0 left-0 right-0 bottom-0" />
      <Image
        src="/background.jpg"
        className="h-screen"
        width="2400"
        height="1600"
        alt="Clouds by the shoreline"
      />
    </div>
  );
}
