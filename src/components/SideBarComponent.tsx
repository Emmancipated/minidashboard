import { AccountIcon, AnalyticsIcon, CustomersIcon, OrdersIcon, ProductsIcon, VendorsIcon, IntegrationsIcon, MyStoreIcon, SettingsIcon } from "../assets/Svgs"

const linkData = [
  {
    header: '', 
    content: [
      {icon: <AccountIcon />, name: 'Dashboard'},
      {icon: <AnalyticsIcon /> , name: 'Analytics'},
      {icon: <OrdersIcon />, name: 'Orders'},
      {icon: <ProductsIcon />, name: 'Products'},
      {icon: <CustomersIcon />, name: 'Customers'},
      {icon: <VendorsIcon />, name: 'Vendors'},
    ]
  },
  {
    header: 'SALES CHANNEL', 
    content: [
      {icon: <IntegrationsIcon />, name: 'Integrations'},
      {icon: <MyStoreIcon />, name: 'My store'},
    ]
  },
  {
    header: 'OTHERS', 
    content: [
      {icon: <SettingsIcon />, name: 'Settings'},
    ]
  },
];

interface OpenProps {
  openstatus: boolean
}

const SideBarComponent = (props: OpenProps):React.JSX.Element => {
  const { openstatus } = props;
  return (
    <section className={`SideBarComponent ${openstatus ? "openSideBar" : ""}`}>
      <div className="main-links">
        {linkData.map(item => (
          <div className="menu" key={item.header}>
            <p className="menu-head">{item.header}</p>
            {item.content.map(menu => (
              <div className="menu-item" key={menu.name}>
                <div className="active-bar"></div>
                <div className="menu-item-contents">
                  <div className="item-icon">{menu.icon}</div>
                  <div className="item-name">{menu.name}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SideBarComponent