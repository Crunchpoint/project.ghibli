import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/main/Howl.module.scss";
import Link from "next/link";

const Howl = () => {
  const observerRef = useRef([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [observerRef, active]);

  return (
    <div className={`${styles.main_bg} ${active ? styles.active : null}`} ref={observerRef}>
      <Link
        href={{
          pathname: "/info/charinfo",
          query: {
            ani_name: "howl"
          }
       }}  >
          <button className={styles.button}>
            SEE MORE
          </button>
        </Link>
        <div className={styles.main_img}>   
            <img className={styles.main_img_01} src="../src/img/main/howl_png.png" alt='하울의움직이는성'/>
            <img className={styles.main_img_02} src="../src/img/main/howl_png2.png" alt='하울의움직이는성'/>
            <img className={styles.main_img_03} src="../src/img/main/howl_cloud_bg.png" alt='하울의움직이는성'/>
        </div>
        <div className={styles.text}>
            <div className={styles.main_text}>Howl&apos;s</div>
            <div className={styles.main_text2}>Moving Castle</div>
        </div>
    </div>
  );
};

export default Howl;
