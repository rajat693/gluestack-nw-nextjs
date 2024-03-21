import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GluestackUIProvider as NativewindProvider } from "@/components/gluestack-ui-provider/index.web";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NativewindProvider mode="light">
      <Component {...pageProps} />
    </NativewindProvider>
  );
}
