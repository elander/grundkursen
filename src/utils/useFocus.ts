import { useEffect, useRef } from "react";

// vår egen hook, som kombinerar två av Reacts,
// nämligen useRef och useEffect, vi använder den
// för att sätta fokus i inputen till formulären
// direkt när de visas. Du ser hur i NewItemForm.
export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        ref.current?.focus();
    }, []);
    return ref;
};