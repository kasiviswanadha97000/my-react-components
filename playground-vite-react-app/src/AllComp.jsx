import React from 'react'

const PlayGround = React.lazy(() => import("./Test/PlayGround"));
const UseStateHook = React.lazy(() => import("./hooks/useState"));
const UseReducerHook = React.lazy(() => import("./hooks/UseReducerHook"));

const AllComp = () => {
  const [page, setPage] = React.useState("");
  const [activeScreen, setActiveScreen] = React.useState("UseStateHook");
  const screensList = [
    { screenName: "UseStateHook" },
    { screenName: "UseReducerHook" },
    { screenName: "Play Ground" }

  ];

  function getScreens(screen) {
    switch (screen) {
      case "UseStateHook":
        return <UseStateHook />;
      case "UseReducerHook":
        return <UseReducerHook />;
      case "Play Ground":
        return <PlayGround />;
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
  return <div>Loading...</div>
}

export default AllComp;
