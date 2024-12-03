import "./App.css";
import ButtonComp from "./components/ButtonComp";
import HeaderComp from "./components/HeaderComp";
import CountContextProvider from "./context/CountContextProvider";

function App() {
    return (
        <CountContextProvider>
            <main
                className="app"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    padding: ".5em",
                }}
            >
                <HeaderComp />
                <ButtonComp text="Add" />
                <div>Your result is displayed below:</div>
            </main>
        </CountContextProvider>
    );
}

export default App;
