import styles from "@/styles/social/Gallery_textArea_modal.module.scss";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

const Gallery_textArea_modal = () => {
  const { crudModal, setCrudModal, commentFn, selectedComment, setEdit, inputRef } = useContext(MyContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.className === styles.cancel || e.target.className === styles.modal) {
        setCrudModal(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [crudModal]);

  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p
            onClick={(e) => {
              setEdit(true);
              setCrudModal(false);
              setTimeout(() => {
                inputRef.current.focus();
              }, 50);
            }}>
            Edit
          </p>
          <p
            onClick={(e) => {
              commentFn("DELETE", selectedComment);
            }}>
            Delete
          </p>
          <p
            className={styles.cancel}
            onClick={(e) => {
              setCrudModal(!crudModal);
            }}>
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
};
export default Gallery_textArea_modal;