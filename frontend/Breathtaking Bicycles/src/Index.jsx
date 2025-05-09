import { useEffect } from "react";
import { useNavigate } from "react-router";

function Index(){
const navigate = useNavigate();
useEffect(() => {
    navigate("/benodigdheden/root");
})

}

export default Index;