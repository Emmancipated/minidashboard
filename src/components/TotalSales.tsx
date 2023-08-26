import { AnalyticsChart } from "../assets/Svgs";

const chartKeysContents = [
  {name: "Desktop", value: "38.4k", style: "rgba(230, 169, 96, 1)"},
  {name: "Desktop", value: "38.4k", style: "rgba(48, 92, 69, 1)"},
  {name: "Desktop", value: "38.4k", style: "rgba(237, 247, 210, 1)"},
  {name: "Desktop", value: "38.4k", style: ""},
];

const TotalSales = ():React.JSX.Element => {
  return (
    <section className="TotalSales">
      <div className="totalsales-container">
        <h3 className="totalsales-header">
          Total visitors
        </h3>

        <div className="totalsales-chart-area">
          <AnalyticsChart />
        </div>

        <div className="totalsales-chart-keys">
          <div className="totalsales-chart-wrapper">
            {chartKeysContents.map((item, index) => (
              <div className="chart-keys" key={index}>
                <div className="chart-dot" style={{backgroundColor: item.style}}></div>
                <div className="chart-name">{item.name}</div>
                <div className="chart-value">{item.value}</div>
              </div>              
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default TotalSales;