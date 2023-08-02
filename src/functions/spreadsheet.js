import config from "../config";


export async function load() {
    try {
        window.gapi.client.load("sheets", "v4");
        const response = await window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Hoja 1!A2"
            });
        const data = response.result.values;
        return data;
    } catch (error) {
        console.error("Error loading", error)
        return null;
    }

}