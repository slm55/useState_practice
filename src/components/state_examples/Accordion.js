import { PropaneSharp, WifiProtectedSetupSharp } from "@mui/icons-material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import data from "./accordion_data";

function AccordionItem(props) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible);
  }

  return (
    <div className="accordion_item">
      <div className="question">
        <div>
         <b>{props.item.id}.</b> {props.item.question}{" "}
        </div>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {visible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      {visible && <div className="answer">{props.item.answer}</div>}
    </div>
  );
}

function Accordion() {
  return <div className="accordion">
    <center><h1>FAQ about React useState</h1></center>
    <br />
    <>
        {data.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
    </>
  </div>;
}

export default Accordion;
