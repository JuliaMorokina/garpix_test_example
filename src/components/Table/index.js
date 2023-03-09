import React from "react";

const Table = ({ rows = {}, columns = [] }) => {
  return (
    <table>
      <thead>
        <row>
          {columns?.map((col) => {
            return (
              <>{col?.show ? <th key={col?.id}>{col?.title}</th> : null}</>
            );
          })}
        </row>
      </thead>
      <tbody>
        {/* разбираем строки в соответствии с settings */}
        {/* {rows?.map((row) => {})} */}
      </tbody>
    </table>
  );
};

export default Table;
