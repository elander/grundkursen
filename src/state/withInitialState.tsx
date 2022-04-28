import { useEffect, useState } from "react";

import { AppState } from "./appStateReducer";
import { load } from "../api/api";

type InjectedProps = {
    initialState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;


// Detta är en så kallad "higher order component", som vi använder
// för att injicera grundtillståndet, som hämtas från backend när vi
// startar appen.
// Det finns en länk till en sida som förklarar konceptet med higher
// order components i ReadMe-filen
export function withInitialState<TProps>(
    WrappedComponent: React.ComponentType<
        PropsWithoutInjected<TProps> & InjectedProps
        >
    ) {
    return (props: PropsWithoutInjected<TProps>) => {
        const [initialState, setInitialState] = useState<AppState>({
            lists: [],
            draggedItem: null,
        })
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState<Error | undefined>();

        useEffect(() => {
            const fetchInitialState = async () => {
                try {
                    const data = await load();
                    setInitialState(data);
                } catch (e: any) {
                    setError(e);
                }
                setIsLoading(false);
            }
            fetchInitialState();
        }, []);

        if (isLoading) {
            return (<div>Loading...</div>);
        }
        if (error){
            return (<div>{error.message}</div>)
        }

        return <WrappedComponent {...props} initialState={initialState} />;
    }

}