import config from "../config";
import { load } from "../functions/spreadsheet";

import { useEffect, useState } from "react"


export default function Test() {
    const [ info, setInfo ] = useState("")

    useEffect( () => {
        window.gapi.load("client", initClient)
    }, [])

    function initClient ()  {
        // 2. Initialize the JavaScript client library.
        window.gapi.client
            .init({
                apiKey: config.apiKey,
            })
            // .then(() => {
            //     // 3. Initialize and make the API request.
            //     setInfo(load().String());
            // });
    };

    async function tryer() {
        const data = await load()
        console.log("TRYER")
        setInfo(data)
    }

    return (
        <div>
            <h1>Hello there!</h1>
            <button onClick = {tryer}>Carga del Excel (A1)</button>
            <p>Ejemplo: {info=="" ? "" : info}</p>
        </div>
    )
}