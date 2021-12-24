import React, { useState } from "react";

const GrassBlock = ({ d }) => {
  const [hover, setHover] = useState(false);
  console.log(d);
  const Hover = ({ onHover, children }) => (
    <div className="hover">
      <div className="hover__no-hover">{children}</div>
      <div className="hover__hover">{onHover}</div>
    </div>
  );
  return (
    <div>
      {d.commit && (
        <Hover onHover={<div> {d.date} </div>}>
          <div
            className="grass__wrapper__block"
            style={
              d.commit < 10
                ? {
                    backgroundColor: `rgb(87,${255 - d.commit * 20},${
                      d.commit * 10
                    })`,
                    width: "15px",
                    height: "15px",
                  }
                : {
                    backgroundColor: `rgb(87,${255 - 100},${100})`,
                    width: "15px",
                    height: "15px",
                  }
            }
          />
        </Hover>
      )}
    </div>
  );
};

export default GrassBlock;
