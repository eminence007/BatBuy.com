import { Avatar, Box, Flex, keyframes } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderCategoryCards({ src, category }) {
  const size = "175px";
  const color = "#fbd309";

  const navigate = useNavigate();

  const pulseRing = keyframes`
	0% {
    transform: scale(0.30);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Box
      as="div"
      position="relative"
      w={size}
      h={size}
      _before={{
        content: "''",
        position: "relative",
        display: "block",
        width: "300%",
        height: "300%",
        boxSizing: "border-box",
        marginLeft: "-100%",
        marginTop: "-100%",
        borderRadius: "50%",
        bgColor: color,
        animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
      }}
    >
      <Avatar
        onClick={() => {
          navigate(`/products/${category}`);
        }}
        href={`/products/${category}`}
        src={src}
        size="full"
        position="absolute"
        top={0}
        cursor="pointer"
      />
    </Box>
  );
}
