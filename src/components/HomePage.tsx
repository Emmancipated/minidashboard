import DisplayComponent from "./DisplayComponent";
import SideBarComponent from "./SideBarComponent";

interface OpenProps {
  openstatus: boolean
}
const HomePage = (props: OpenProps):React.JSX.Element => {
  const { openstatus } = props;
  return (
    <section className="HomePage">
      <SideBarComponent 
        openstatus={openstatus}
      />
      <DisplayComponent />
    </section>
  )
}

export default HomePage;