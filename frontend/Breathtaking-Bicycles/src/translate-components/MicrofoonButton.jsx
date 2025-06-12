import { MicrophoneIcon, StopIcon } from "@heroicons/react/24/solid";

function MicrofoonButton ({uiSettings, handleMicrophoneClick, recording}){
    return(
    <button 
        className={`w-20 h-20 ml-auto mr-auto cursor-pointer rounded-full bg-[${uiSettings.colorPalette.colorFour}] 
        hover:bg-[${uiSettings.colorPalette.colorFourShadow}] flex items-center justify-center overflow-hidden`}
        onClick={handleMicrophoneClick}
    > 
    {recording ? (<StopIcon 
                className="w-1/2 h-1/2 object-contain"
                />) : (<MicrophoneIcon 
                    className="w-1/2 h-1/2 object-contain" 
                />)
    }
            
    </button>
);

}

export default MicrofoonButton;