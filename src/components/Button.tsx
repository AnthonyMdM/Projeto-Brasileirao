import styles from "@/components/button.module.css";
type ButtonProps = React.ComponentProps<"button">;
export default function Button(props: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}
