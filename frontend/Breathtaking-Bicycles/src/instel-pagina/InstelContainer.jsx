import TaalInstelmenuComponent from "./Instelmenu-components/TaalInstelmenuComponent.jsx";
import KleurenpaletKeuzeComponent from "./Instelmenu-components/KleurenpaletKeuzeComponent.jsx";

 function InstelContainer({colorPalettes, geselecteerdPalet, setGeselecteerdPalet}) {

    return (
        <div className="container p-10 h-200">
            <div className="flex flex-col items-center h-[100%] rounded-lg bg-[#F5EEDC]">
                <TaalInstelmenuComponent />
                <KleurenpaletKeuzeComponent colorPalettes={colorPalettes} 
                    geselecteerdPalet={geselecteerdPalet}
                    setGeselecteerdPalet={setGeselecteerdPalet}
                />
            </div>
        </div>
    );
}

export default InstelContainer;
