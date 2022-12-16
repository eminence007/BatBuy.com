import { Flex, Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderCategoryCards from "./HeaderCategoryCards";

const categories = [
  {
    name: "Laptops & Computers",
    category: "laptops",
    src: "https://images.macmerise.com/product/skins/genericbatmanpotrait.jpg",
  },
  {
    name: "Mobile Phones",
    category: "phones",
    src: "https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/09/09120958/tuxpi.com_.1662702523-1140x570.jpg",
  },
  {
    name: "Smart Watches",
    category: "laptops",
    src: "https://64.media.tumblr.com/9f35770194c70927f503f97bc2429a43/1be70d3fab230852-1c/s500x750/4f1d747550b9a9ad5390c2ade09c97bdeb700d2a.pnj",
  },
  {
    name: "Gaming Consoles",
    category: "laptops",
    src: "https://m.media-amazon.com/images/I/41QwbBaOfnL._SL1000_.jpg",
  },
  {
    name: "HeadPhones",
    category: "headphones",
    src: "https://www.redwolf.in/image/cache/catalog/headphones/dc-comics-batman-logo-wireless-headphones-india-1-700x700.jpg",
  },
  {
    name: "Classic Walkman",
    category: "headphones",
    src: "https://www.ajournalofmusicalthings.com/wp-content/uploads/Batman-belt-speaker.jpg",
  },
  {
    name: "Mobile Cases",
    category: "laptops",
    src: "https://images.macmerise.com/product/extreme-case/ipcip8xbatmangeometric.jpg?",
  },
  {
    name: "VR Headsets",
    category: "headphones",
    src: "https://64.media.tumblr.com/99311fb933b7050773e998608c409702/e7989e0484c88ba3-c7/s2048x3072/daf95cf66918dd3e907a25641d8341d44195af7b.pnj",
  },
  {
    name: "BatBot Xtreme",
    category: "laptops",
    src: "https://64.media.tumblr.com/de90bffb3cef198944accb62ed63cbb4/4d8df3b7a7882a07-3b/s2048x3072/af4778040e451e4e4e23715be46afa307f3f2ccb.pnj",
  },
  {
    name: "Bat Helmet",
    category: "laptops",
    src: "https://64.media.tumblr.com/59f017ac276ef004016342ea6f85a353/3eb5b58ed4eb5721-9a/s2048x3072/63ece70984d41c1c1f0ba9e4b89672341d048f14.pnj",
  },
  {
    name: "PC Gaming",
    category: "laptops",
    src: "https://64.media.tumblr.com/4a3442372d4e6b8ee599ac7c8e56f525/2b3911c97fb38392-5c/s2048x3072/2e5e14af4f8da4e34369e738cfa93634b5da3d99.pnj",
  },
  {
    name: "Bluetooth Speakers",
    category: "headphones",
    src: "https://64.media.tumblr.com/81d7db0d1a7442d4fa0800a2759466fd/a074806172e675ff-af/s640x960/bab118c736991651ce9d093bdf40aaf6efdf0b0a.pnj",
  },
  {
    name: "Custom PCs",
    category: "laptops",
    src: "https://64.media.tumblr.com/dd2400d15b958241b0a12e02346e7017/34b0c0edbfaad501-e8/s2048x3072/d02029117c1cce29bb82c54d73217b5af9a7ce2a.pnj",
  },
  {
    name: "Mobile Accessories",
    category: "laptops",
    src: "https://64.media.tumblr.com/2f0399f4b8d28f18b2b83e4e1ce5d1d6/42f9fdc61e0475f0-f4/s2048x3072/ef41eb1a36e87814f5a01856453d0b82c6635245.pnj",
  },
  {
    name: "Apple MacBook",
    category: "laptops",
    src: "https://images.macmerise.com/product/skins/greybatmanoverload1.jpg",
  },
  {
    name: "Apple iPhones",
    category: "laptops",
    src: "https://images.macmerise.com/product/lumous-led-case/ipc11mmsilhouettebatman1new.gif",
  },
  {
    name: "TVs & Projectors",
    category: "laptops",
    src: "https://64.media.tumblr.com/5f5fc0c7317e3b1e86c6604cae9f2333/85a7fd21c6d124cc-06/s640x960/7b7b41d40bcd687b3d0b096cec1fdd7efe611633.pnj",
  },
  {
    name: "Laptop Skins",
    category: "laptops",
    src: "https://images.macmerise.com/product/decals/decalbatmanclassic.jpg",
  },
];

export const HeaderCategory = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#0f0b06", paddingTop: "10px" }}>
      <Text ml={20} color="#fbd309" as="b" fontSize="lg">
        Shop deals by category
      </Text>
      <Grid
        templateColumns="repeat(6, auto)"
        justifyContent="space-around"
        alignItems="center"
        h="full"
        w="full"
        bg="#0f0b06"
        gap="5"
        overflow="hidden"
        px={70}
        py={5}
        color="#fbd309"
      >
        {categories.map((el) => {
          return (
            <Stack key={el.name}>
              {/* <Link to={`/products/${el.category}`}> */}
              <HeaderCategoryCards src={el.src} category={el.category} />
              {/* </Link> */}
              <Text textAlign="center" as="b" fontSize="md">
                {el.name}
              </Text>
            </Stack>
          );
        })}
      </Grid>
    </div>
  );
};
