"use client";

import { Box } from "@mantine/core";
import { Parallax } from "react-parallax";

const HeadlineSection = () => {
  return (
    <Box sx={{ height: "116rem" }}>
      <Parallax
        blur={0}
        bgImage="/images/sample-bg.jpg"
        bgImageAlt="rainy"
        strength={300}
      >
        <Box sx={{ height: "16rem" }}>
          Content goes here. Parallax height grows with content height.
        </Box>
      </Parallax>
    </Box>
  );
};

export default HeadlineSection;
