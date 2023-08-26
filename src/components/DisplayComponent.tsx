import OrdersComponent from "./OrdersComponent";
import Sales from "./Sales";
import SalesAnalytics from "./SalesAnalytics";

const DisplayComponent = ():React.JSX.Element => {
  return (
    <section className="DisplayComponent">
      <Sales />
      <SalesAnalytics />
      <OrdersComponent />
    </section>
  )
}

export default DisplayComponent;