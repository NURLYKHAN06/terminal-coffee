import React from "react";

export function Place({ id, owner, changePlace, orderId }) {
  return (
    <div onClick={() => changePlace({ id, orderId })}>
      Номер:{id} {owner && <span>- занято</span>}
    </div>
  );
}
