import { useEffect } from "react";
import { useNavigate } from "react-router";

function Index(){
const navigate = useNavigate();
useEffect(() => {
    navigate("/benodigdheden/0");
})

}

export default Index;