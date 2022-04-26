import { AppState } from "../state/appStateReducer";

export const load = () => {
    return fetch('http://localhost:4000/load').then((response) => {
        if(response.ok) {
            return response.json() as Promise<AppState>;
        } else {
            throw new Error("Something went wrong while loading state");
        }
    });
}


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