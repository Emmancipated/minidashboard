import { DropDownIcon } from "../assets/Svgs";
import FilterComponent from "./FilterComponent";
import TotalSales from "./TotalSales";

const barChartData = [
  {month: "Jan", percent: "50"},
  {month: "Feb", percent: "80"},
  {month: "Mar", percent: "60"},
  {month: "Apr", percent: "70"},
  {month: "May", percent: "50"},
  {month: "Jun", percent: "45"},
  {month: "Jul", percent: "50"},
  {month: "Aug", percent: "45"},
  {month: "Sep", percent: "50"},
  {month: "Oct", percent: "30"},
  {month: "Nov", percent: "100"},
  {month: "Dec", percent: "70"},
]

const SalesAnalytics = ():React.JSX.Element => {
  return (
    <section className="SalesAnalytics">
      <div className="sales-analytics-container">
        <div className="sales-analytics-header">
          <h3>Sales analytics</h3>
          <FilterComponent
            title="Yearly"
            icon={<DropDownIcon />}
          />
        </div>

        <div className="sales-analytics-chart-container">
          <div className="analytics-amount-wrapper">
            <div className="analtyics-amount">
              <p>500k</p>
              <p>400k</p>
              <p>300k</p>
              <p>200k</p>
              <p>100k</p>
            </div>
            <div className="analytics-zero">
              0
            </div>
          </div>

          <div className="analytics-chart-wrapper">
            {barChartData.map(bar => (
              <div className="analtyics-charts" key={bar.month}>
                <div className="bar-wrapper">
                <div className="bar" style={{height: `${bar.percent}%`}}></div>
                </div>
                <div className="analytics-month">{bar.month}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <TotalSales />
    </section>
  )
}

export default SalesAnalytics;