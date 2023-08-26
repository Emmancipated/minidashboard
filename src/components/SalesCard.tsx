import React from "react";

type SalesCardProps = {
  title: string,
  figure: string,
  arrow: React.JSX.Element,
  colorType: string,
  trend: React.JSX.Element,
}

const SalesCard = (props: SalesCardProps):React.JSX.Element => {
  const {title, figure, arrow, colorType, trend} = props;
  return (
    <section className="SalesCard">
      <div className="sales-title">{title}</div>
      <div className="sales-figure">{figure}</div>
      <div className="sales-details">
        <div className="sales-direction">
          <div className={`percentage ${colorType}`}> {arrow}<span>4.8%</span></div>
          <div className="sales-date">from yesterday</div>
        </div>
        <div className="sales-graph-image">
          {trend}
        </div>
      </div>
    </section>
  )
}

export default SalesCard;