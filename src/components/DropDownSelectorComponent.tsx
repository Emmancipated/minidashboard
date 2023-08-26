import React from "react";
import { DropDownFilterIcon } from "../assets/Svgs";

interface FilterContents {
  title: string,
}

const DropDownSelectorComponent = (props: FilterContents): React.JSX.Element => {
  const {title } = props;
  return (
    <section className="DropDownSelector">
      {title} <span className="icon"> <DropDownFilterIcon /></span>
    </section>
  )
}

export default DropDownSelectorComponent;