type Thing = {
    id: string;
}

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