import React, { useState, useEffect, useCallback } from "react";
import "./SortVisualization.css";
import { getBubbleSort } from "../Bubble/bubble"

const SortVisualization = () => {
  const [array, setArray] = useState([]);
  
  const resetArray = useCallback(() =>{
    let array = []
    for(let i = 0; i < 150; i++) {
      array.push(randomInt(5, 500))
    }
    setArray(array)
  }, [])
  
  useEffect(() => {
    resetArray()
  }, [resetArray])

  function randomInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
  }

  function bubbleSort() {
    let [animation] = getBubbleSort(array)
    for (let i = 0; i < animation.length; i++) {
      const isColorChange = (i % 4 === 0) || (i % 4 === 1)
      const arrayBars = document.getElementsByClassName("array-bar")
      if (isColorChange) {
        const color = (i % 4 === 0) ? "tomato" : "green" 
        const [barOneIdx, barTwoIdx] = animation[i];
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i*1);
      } else {
        const [barIdx, newHeight] = animation[i]
        if (barIdx === -1) {
          continue
        }
        const barStyle = arrayBars[barIdx].style
        setTimeout(() => {
          barStyle.height = `${newHeight}px`
        }, i*1);
      }
    }
  }

  return (
    <>
      <div className="array-container">
        {array.map((value, index) => (
          <div 
            className="array-bar"
            key={index}
            style={{height: `${value}px`}}
          >
          </div>
        ))}
        <div 
            className="array-bar"
            key={array.length+1}
            style={{
              height: "500px",
              background: "#1b0760"
            }}
          >
          </div>
      </div>
      <button onClick={resetArray}>reset array</button>
      <button onClick={bubbleSort}>bubble sort</button>
    </>
  );
};

export default SortVisualization;
