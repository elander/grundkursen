import { AppState } from "../state/appStateReducer";

// Den här funktionen anropas via en useEffect-hook i "withInitialState"
// för att hämta vårt globala tillstånd när appen startar,
// och efter varje save i 
export const load = () => {
    return fetch('http://localhost:4000/load').then((response) => {
        if(response.ok) {
            return response.json() as Promise<AppState>;
        } else {
            throw new Error("Something went wrong while loading state");
        }
    });
}

// Den här funktionen anropas av AppStateContext, för att lagra innehåll
// varje gång AppState ändras så att vi "lagrar" det i backend.
export const save = (
    payload: AppState
    ) => {
        return fetch('http://localhost:4000/save', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Something went wrong while saving state");
            }
        });
    }