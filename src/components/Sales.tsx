import { DownwardArrow, GreenTrend, OrangeTrend } from "../assets/Svgs";
import { UpwardArrow } from "../assets/Svgs";
import SalesCard from "./SalesCard";

const Sales = ():React.JSX.Element => {
  return (
    <section className="Sales">
      <SalesCard 
        title="Total sales"
        figure="₦185,700"
        arrow={<UpwardArrow />}
        colorType="green"
        trend={<GreenTrend />}
      />

      <SalesCard 
        title="Total orders"
        figure="985"
        arrow={<DownwardArrow />}
        colorType="orange"
        trend={<OrangeTrend />}
      />

      <SalesCard 
        title="Total products"
        figure="₦185.7k"
        arrow={<UpwardArrow />}
        colorType="green"
        trend={<GreenTrend />}
      />
    </section>
  )
}

export default Sales;