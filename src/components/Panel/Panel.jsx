import React from "react";
import styles from "./Panel.module.css";

const Panel = ({ images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div style={{flex:'1'}} className={styles.panelBox}>
          <img src={images[0]} alt="" />
        </div>
        <div style={{flex:'1'}} className={styles.panelBox}>
          <img src={images[1]} alt="" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.panelBox}>
          <img src={images[2]} alt="" />
        </div>
        <div className={styles.panelBox}>
          <img src={images[3]} alt="" />
        </div>
        <div className={styles.panelBox}>
          <img src={images[4]} alt="" />
        </div>
      </div>

      <div className={styles.row}>
        <div style={{flex:"1.5"}} className={styles.panelBox}>
          <img src={images[5]} alt="" />
        </div>
        <div style={{flex:"1",objectFit:"cover"}} className={styles.panelBox}>
          <img style={{width:"100%" , objectFit:"cover",height:"99%"}} src={images[6]} alt="" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.panelBox}>
          <img src={images[7]} alt="" />
        </div>
        <div className={styles.panelBox}>
          <img src={images[8]} alt="" />
        </div>
        <div className={styles.panelBox}>
          <img src={images[9]} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default Panel;
