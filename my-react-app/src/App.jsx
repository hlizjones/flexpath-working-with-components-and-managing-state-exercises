import React, { Suspense } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
const Timer = React.lazy(() => import("./components/Timer"));
import withLoading from "./hoc/withLoading";
import Data from "./components/Data";
import ErrorBoundary from "./components/ErrorBoundary"
// import Error from "./components/Error";
import ExpensiveFunction from "./components/ExpensiveFunction";
import Display from "./components/Display";
import useWindowWidth from "./hooks/useWindowWidth"
import ToBreak from "./components/Break";



function App() {
  const WithLoadingData = withLoading(Data)
  const MemoizedGreeting = React.memo(Greeting)
  const width = useWindowWidth()

  return (
    <div>
      <ErrorBoundary>
        <h2>Window width: {width}</h2>
        <ToBreak />
        <MemoizedGreeting name="Hannah" />
        {/* <Error /> */}
        <Display />
        <Suspense fallback={<div>Loading...</div>}>
          <Timer />
        </Suspense>
        <Counter />
        <WithLoadingData />
        <ExpensiveFunction />
      </ErrorBoundary>
    </div>
  );
}

export default App;



