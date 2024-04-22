import {FC  , useEffect, useRef} from "react";

interface CanvasProps {
  width: string;
  height: string;
  values: {
    v1: string;
    v2: string;
    op:string;
  }
}

const Canvas: FC<CanvasProps> = (props) => {

  const {width, height, values} = props
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const draw = (context: CanvasRenderingContext2D) => {
      context.fillStyle = "white"
      context.strokeStyle = "white"
      context.lineWidth = 4
      context.font = "40px Arial"

      context.beginPath();
      context.moveTo(110, 25);
      context.quadraticCurveTo(40, 90, 110, 170);
      context.stroke();

      context.fillText(values.v1, 100, 70)
      context.fillText(values.op, 108, 101)
      context.fillText(values.v2, 100, 145)
    }

    const canvas = ref.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (values.v1 !== '' || values.v2 !== '') {
          draw(context)
        }
      }
    }
    // console.log("loop")
  }, [values.op, values.v1, values.v2]);

  return (
      <canvas ref={ref} width={width} height={height} className="border border-secondary-subtle border-opacity-10 shadow-lg p-3 mb-5 rounded"/>
  )
}

export default Canvas