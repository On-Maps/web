import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NoSSR from "react-no-ssr";
import { MapInfoProvider } from "./map/context/useMapInfo.context";

export default function App({ Component, pageProps }: AppProps) {
  const isMapRoute = Component.name === "Map";

  if (isMapRoute) {
    return (
      <MapInfoProvider>
        <NoSSR>
          <Component {...pageProps} />
        </NoSSR>
      </MapInfoProvider>
    );
  }

  return <Component {...pageProps} />;
}
