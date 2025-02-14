import { useState, useEffect  } from "react";
import Loading from "./Componants/Loading";
import Portpholio from "./Componants/Portpholio";




export default function App() {


    const [loading, setLoading] = useState(true);

    useEffect(() => {

    setTimeout(() => {
        setLoading(false);
    }, 3000); 
    }, []);



    return(
<div>
{loading ? <Loading /> : <Portpholio />}
</div>

    );
}



















































