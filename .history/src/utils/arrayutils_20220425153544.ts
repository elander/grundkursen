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
