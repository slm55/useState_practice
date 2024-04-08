import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";

function Slider() {
  const images = [
    "https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124",
    "https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png",
    "https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/images/optimized/rev-49e2c5e/litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png",
    "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
  ];
  const [index, setIndex] = useState(0);

  function prev() {
    const prevIndex = index === 0? images.length - 1 : index - 1;
    setIndex(prevIndex);
  }

  function next() {
    const nextIndex = index === images.length - 1? 0 : index + 1;
    setIndex(nextIndex);
  }

  return (
    <div className="slider">
      <KeyboardArrowLeftIcon onClick={prev} style={{ fontSize: "60px", cursor: "pointer"  }}/>
      <img src={images[index]} alt="" />
      <KeyboardArrowRightIcon onClick={next} style={{ fontSize: "60px", cursor: "pointer"   }}/>
    </div>
  );
}

export default Slider;
