import React from "react";
import styles from "./style.module.css"

function ActiveComponent({tasks, handleToggleTick}) {
  return (
    <div>
      {tasks?.map(
        (tasks, index) =>
          !tasks.showTick && (
            <div key={index} className={styles.result}>
              <div
                className={`${styles.checkBox} ${
                  tasks.showTick ? styles.checkboxItem : ""
                }`}
                onClick={() => handleToggleTick(index)}
              ></div>
              <div className={styles.textResult}>{tasks.newTask.title}</div>
            </div>
          )
      )}
    </div>
  );
}

export default ActiveComponent;
