import styles from './AddItemButton.module.css';

type AddItemButtonProps = {
    dark?: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

export const AddItemButton = (props: AddItemButtonProps) => {
    const { dark, children } = props;
    const cssClass = dark ? styles.dark : styles.light;

    return (
        <button onClick={props.onClick}
        
        >{children}</button>
    )
};