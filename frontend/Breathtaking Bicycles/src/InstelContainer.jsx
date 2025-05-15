import react from "react";
import TaalInstelmenuComponent from "./TaalInstelmenuComponent.jsx";

 function InstelContainer() {
    return (
        <div className="container p-10 h-200">
            <div className="flex flex-col items-center h-[100%] rounded-lg bg-[#F5EEDC]">
                <TaalInstelmenuComponent />
            </div>
        </div>
    );
}

export default InstelContainer;