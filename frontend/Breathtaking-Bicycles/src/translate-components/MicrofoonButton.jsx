import { MicrophoneIcon } from "@heroicons/react/24/solid";

function MicrofoonButton ({uiSettings}){
    return(
    <button 
        className={`w-20 h-20 ml-auto mr-auto cursor-pointer rounded-full bg-[${uiSettings.colorPalette.colorFour}] 
        hover:bg-[${uiSettings.colorPalette.colorFourShadow}] flex items-center justify-center overflow-hidden`}
    > 
            <MicrophoneIcon 
                className="w-1/2 h-1/2 object-contain" 
            />
    </button>
);

}

export default MicrofoonButton;