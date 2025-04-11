import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { clearBasket } from "@/app/basket/basketUtils";

interface BasketSuccessModalProps {
  subtotal: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BasketSuccessModal({
  subtotal,
  setModal,
}: BasketSuccessModalProps) {
  const router = useRouter();

  const handleClose = () => {
    setModal(false);
    router.push("/");
    clearBasket();
  };

  return (
    <div className={styles.basketSuccessModal}>
      <div className={styles.basketSuccessModalContainer}>
        <img
          src="/resources/images/congo-hero-banner.png"
          className={styles.image}
        />
        <h1 className={styles.title}>Order Complete</h1>
        <div className={styles.subtotal}>Subtotal: £{subtotal.toFixed(2)}</div>
        <div className={styles.message}>Thanks for shopping with Congo!</div>
        <button className={styles.closeButton} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}
