import { Gallery } from "./components/Gallery";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <div>
        <Gallery />
      </div>
    </ReactLenis>
  );
}

export default App;
