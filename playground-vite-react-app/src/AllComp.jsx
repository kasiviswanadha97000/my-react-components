import React from 'react'

const PlayGround = React.lazy(() => import("./Test/PlayGround"));
const UseStateHook = React.lazy(() => import("./hooks/UseState"));
const UseReducerHook = React.lazy(() => import("./hooks/UseReducerHook"));
const UseContextHook = React.lazy(() => import("./hooks/useContextAPI/Comp1"));
const UseEffectHook = React.lazy(() => import("./hooks/UseEffect"));
const DependencyDropdown = React.lazy(() => import('./Test/DependencyDropdown'));

const AllComp = () => {
  const [page, setPage] = React.useState("");
  const [activeScreen, setActiveScreen] = React.useState("UseStateHook");
  const screensList = [
    { screenName: "UseStateHook" },
    { screenName: "UseReducerHook" },
    { screenName: "Play Ground" },
    { screenName: "UseContextHook" },
    { screenName: "Dependency Dropdown" },
    { screenName: "UseEffectHook" }
  ];

  function getScreens(screen) {
    switch (screen) {
      case "UseStateHook":
        return <UseStateHook />;
      case "UseReducerHook":
        return <UseReducerHook />;
      case "Play Ground":
        return <PlayGround />;
      case "UseContextHook":
        return <UseContextHook />;
      case "Dependency Dropdown":
        return <DependencyDropdown />;
      case "UseEffectHook":
        return <UseEffectHook />;
      default:
        return <UseStateHook />;
    }
  }

  return (
    <div>
      {/* hooks */}
      {/* Render selected screen dynamically */}
      <React.Suspense fallback={<Loading />}>
        <div className='tab-container'>
          <div className='tabs-list'>
            {screensList.map((list, i) => (
              <button className={`btn_tab ${activeScreen === list.screenName ? "active" : ""}`} type='button' key={i} onClick={() => { setPage(list.screenName); setActiveScreen(list.screenName) }}>{list.screenName}</button>
            ))}
          </div>
        </div>
        {getScreens(page)}
      </React.Suspense>

    </div>
  )
}

function Loading() {
  return <center style={{paddingTop: "2rem"}}>Loading...</center>
}

export default AllComp;
