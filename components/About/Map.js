import React from "react";
import styles from "../../styles/About/Map.module.scss";

const Map = () => {
  return (
    <section className={styles.map}>
      <div className={styles.map__large}>
        <img
          className={styles.map__large__img}
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/10.7521,59.9125,3/650x500?access_token=pk.eyJ1IjoidGlvbmJhaSIsImEiOiJja21ocnExbWowYTRvMnBtdGV6eDlzdDA5In0.VR0ar-9RwKePVW8_2zgMKg"
          alt="Map of Oslo, Norway, zoomed out"
        />
        <div className={styles.map__small}>
          <img
            className={styles.map__small__img}
            src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+3f51b5(10.7409,59.9128)/10.7409,59.9128,9,0/300x200?before_layer=admin-0-boundary&access_token=pk.eyJ1IjoidGlvbmJhaSIsImEiOiJja21ocnExbWowYTRvMnBtdGV6eDlzdDA5In0.VR0ar-9RwKePVW8_2zgMKg"
            alt="Map of Oslo, Norway, zoomed in"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
