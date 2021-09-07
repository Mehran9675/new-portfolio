import Side from "@/components/layout/side/side";
import { Row } from "@/ui-utils";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Row>
      <Side />
      <Component {...pageProps} />;
    </Row>
  );
}

export default MyApp;
