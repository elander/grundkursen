// "bra att ha"-funktioner för att mecka med arrayer.
// Vi behövde dem för att kunna flytta listor hit och dit,
// och för att flytta tasks inom och mellan listor

type Thing = {
    id: string;
}

// Här gör vi en intressant fint med typescript:
// Vi har definierat "Thing" ovanför, och här säger
// vi att den array vi tar emot ska innehålla saker 
// som åtminstone innehåller alla properties som Thing
// har, dvs åtminstone ett "id" av typen string.
// De kan få ha vilka andra properties som helst utöver det,
// men de får inte sakna ett "id" av typen string. Det
// är det som "extends" betyder här.
export const findItemIndexById =
<TItem extends Thing>(
    items: TItem[],
    id: string
) => {
    return items.findIndex((item: TItem) => item.id === id);
};

export function removeItemAtIndex<TItem extends Thing>(
    array: TItem[],
    index: number
): TItem[] {
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

export function insertItemAtIndex<TItem extends Thing>(
    array: TItem[],
    item: TItem,
    index: number
): TItem[] {
    return [...array.slice(0, index), item, ...array.slice(index)];
};

export const moveItem = <TItem extends Thing>(
    array: TItem[],
    from: number,
    to: number
  ) => {
    const item = array[from]
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
  }