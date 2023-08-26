import { DownloadIcon, DropDownIcon, PenIcon, TrashIcon } from "../assets/Svgs";
import DropDownSelectorComponent from "./DropDownSelectorComponent";
import FilterComponent from "./FilterComponent";
import PageCounter from "./PageCounter";
import { orderData, orderValues } from "../assets/data/data";
import { useState } from "react";

const headerItems = [
  "All",
  "Confirmed",
  "Processing",
  "Picked",
  "Shipping",
  "Shipped",
  "Cancelled",
]

const OrdersComponent = ():React.JSX.Element => {
  const [activeHeader, setActiveHeader] = useState("All");

  const handleActiveHeader = (element:string) => {
    setActiveHeader(element)
  }

  return (
    <section className="OrdersComponent">
      <div className="orders-container">
        <div className="orders-header">
          <h3>Orders</h3>

          <div className="export-filter-container">
            <FilterComponent
              title="Last 7 days"
              icon={<DropDownIcon />}
            />
            <FilterComponent
              title="Export CSV"
              icon={<DownloadIcon />}
            />
          </div>
        </div>

          <div className="order-summary-container">
            <div className="order-summary-header-smallScreen">
              <DropDownSelectorComponent 
                title="All"  
              />
            </div>
            <div className="order-summary-header-bigScreen">
              {headerItems.map(item => (
              <div className={`summary-header-item-wrapper ${activeHeader === item ? "active" : ""}`} key={item} onClick={() => handleActiveHeader(item)}>
                <div className="summary-header-item">{item}</div>
              <div className="summary-header-state"></div>
            </div>
              ))}
            </div>

            {orderValues.map((item, i) => (
                <div className="order-summary-wrapper" key={i}>
                <div className="summary-card-control-wrapper">
                  <div className="summary-card-controls">
                    <div className="order-id">{item.items[0]}</div>
                    <div className="controls">
                      <TrashIcon />
                      <PenIcon />
                    </div>
                  </div>
    
                </div>
                <div className="summary-contents">
                <div className="summary-headers">
                {orderData[0].inlineHeader?.map((i, index) => (
                    <div className="order-id" key={index}>{i}</div>             
                  ))}
                </div> 

                  <div className="summary-values">
                  {item.items.map(contents => (
                    <div className="order-id" key={contents}>{contents}</div>             
                  ))}                  
                  </div>
                </div>
              </div>
            ))}

            <div className="order-summary-wrapper-bigScreen">
              <div className="summary-contents">
                <div className="summary-headers">
                  {orderData[0].inlineHeader?.map(data => (
                      <div className="headers-item" key={data}>{data}</div>  
                  ))}
                </div>

                {orderValues.map((items, ind) => (
                  <div className={`summary-values ${items.status}`} key={ind}> 
                    {items.items.map(item => (
                      <div className="headers-item" key={item}>{item}</div> 
                    ))}
                  </div>
                  ))}
              </div>
            </div>
            <PageCounter />
          </div>
      </div>
    </section>
  )
}

export default OrdersComponent;