import DropDownSelectorComponent from "./DropDownSelectorComponent";

const PageCounter = (): React.JSX.Element => {
  return (
    <section className="PageCounter">
      <div className="pagecounter-wrapper">
        <DropDownSelectorComponent
          title="5 per page"
        />
        <div className="curreent-page-bigScreen">
          Showing 1 - 10 of 40
        </div>

        <div className="pages-tabs">
          <div className="tab control-left">&lt;</div>
          <div className="tab">1</div>
          <div className="tab">2</div>
          <div className="tab">3</div>
          <div className="tab">4</div>
          <div className="tab">5</div>
          <div className="tab">6</div>
          <div className="dottab">...</div>
          <div className="tab control-right">&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default PageCounter;