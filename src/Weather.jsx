import React, { useEffect, useState } from "react";
// import '.src/style.css'

// import AddIcon from '@material-ui/icons/Add';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Weather = () => {


    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Nagur")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c461a9543f8427022f1d1e083d3910ed`
            const response = await fetch(url)
            // console.log(response)
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])

    
    // const namecity=()=>{
    //     setCity()0
    // }



    return (
        <>
            <div className="box">
                <div className="input1">
                    <input type="search" value={search} className="inputsearch" onChange={(event) => {
                        setSearch(event.target.value)

                    }} />

                </div>
                {!city ? (<p>no data found</p>) : (


                    <div>

                        <div className="info">
                            <h2 className="location">{search}</h2>

                            <h1 className="temp"> {city.temp}^cel</h1>

                            <p>  {city.temp}^cel min 5o cencius/ggasv</p>
                        </div>

                    </div>
                )} ;



            </div>7
        </>
    )
}

export default Weather;