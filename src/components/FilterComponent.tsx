import React from "react";

interface FilterContents {
  title: string,
  icon?: React.JSX.Element,
}

const FilterComponent = (props: FilterContents): React.JSX.Element => {
  const {title, icon} = props;

  return (
    <section className="FilterComponent">
      <span>{title}</span> <span className="icon"> {icon}</span>
    </section>
  )
}

export default FilterComponent;