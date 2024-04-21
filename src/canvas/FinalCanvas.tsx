import {FC, useCallback, useEffect, useRef} from "react";

interface UnitermValues {
  uni1: string;
  uni2: string;
  uni3: string;
  uni4: string;
}

interface FinalCanvasProps {
  width: string;
  height: string;
  mainValue: string;
  values: UnitermValues
  position: string | undefined;
}

const FinalCanvas: FC<FinalCanvasProps> = (props) => {
  const {width, height, values, position} = props
  const ref = useRef<HTMLCanvasElement>(null)

  const checkIsEmpty = useCallback((object: UnitermValues) => {
    return Object.values(object).every(value => value !== '');
  }, [])

  useEffect(() => {
    const draw = (context: CanvasRenderingContext2D) => {
      context.fillStyle = "white"
      context.strokeStyle = "white"
      context.lineWidth = 4
      // main line
      context.beginPath();
      context.moveTo(110, 25);
      context.quadraticCurveTo(40, 100, 110, 200);
      context.stroke();
      if (position === 'Up') {
        // extra term Up
        context.beginPath();
        context.moveTo(130, 20);
        context.quadraticCurveTo(90, 60, 130, 115);
        context.stroke();
        context.font = "25px Arial"
        context.fillText(values.uni3, 125, 50)
        context.fillText(";", 132, 71)
        context.fillText(values.uni4, 125, 100)
        //down
        context.font = "40px Arial"
        context.fillText(";", 108, 135)
        context.fillText(values.uni2, 100, 180)
      } else {
        // extra term down
        context.beginPath();
        context.moveTo(130, 105);
        context.quadraticCurveTo(90, 150, 130, 200);
        context.stroke();
        context.font = "25px Arial"
        context.fillText(values.uni3, 125, 135)
        context.fillText(";", 132, 155)
        context.fillText(values.uni4, 125, 185)
        // up
        context.font = "40px Arial"
        context.fillText(";", 108, 105)
        context.fillText(values.uni1, 100, 70)
      }
    }

    const canvas = ref.current
    if (canvas) {
      const context = canvas.getContext('2d')
      context?.clearRect(0, 0, canvas.width, canvas.height);
      if (checkIsEmpty(values) && context && position) {
        draw(context)
      }
    }
  }, [checkIsEmpty, position, values, values.uni1, values.uni2]);

  return (
      <canvas ref={ref} width={width} height={height} className="border border-secondary-subtle border-opacity-10 shadow-lg p-3 mb-5 rounded"/>
  )
}

export default FinalCanvas;