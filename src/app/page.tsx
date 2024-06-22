import { WeatherBox } from "./components/WeatherBox/WeatherBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-300">
      <WeatherBox />
    </main>
  );
}
