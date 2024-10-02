import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useDimension } from "../hooks/useDimension";

export function Gallery() {
  const container = useRef(null);
  const { height } = useDimension();

  const images = [
    "1.jfif",
    "2.jfif",
    "4.jfif",
    "3.jfif",
    "6.jfif",
    "5.jfif",
    "9.jfif",
    "7.jfif",
    "8.jfif",
    "10.jpg",
    "11.jfif",
    "12.jfif",
  ];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    // main
    <main>
      <div className="h-screen"></div>
      {/* gallery  */}
      <div
        ref={container}
        className="h-[175vw] flex gap-[2vw] p-[2vw] bg-[rgb(45,45,45)] overflow-hidden relative"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className="h-screen"></div>
    </main>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    // column
    <motion.div
      style={{ y }}
      id="column"
      className="w-1/4 h-full flex flex-col gap-[2vw] min-w-[250px] relative"
    >
      {images.map((img, key) => (
        // image container
        <div
          key={key}
          className="w-full h-full relative rounded-[2vw] overflow-hidden"
        >
          <img src={img} alt="" className="object-cover h-full w-auto" />
        </div>
      ))}
    </motion.div>
  );
};
