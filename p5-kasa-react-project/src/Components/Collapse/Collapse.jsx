import { useState } from "react";
import "./collapse.scss";
import { IoIosArrowUp } from "react-icons/io";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className={`collapse-header ${isOpen ? "open" : ""}`}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? "rotate" : ""}`} onClick={toggleCollapse}>
          <IoIosArrowUp size={30} />
        </span>
      </div>

      {isOpen && (
        <div className="collapse-content open">
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
