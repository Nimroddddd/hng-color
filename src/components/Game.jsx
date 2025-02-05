
import { useState } from "react"
import EachColor from "./EachColor"
import { useEffect } from "react"
import useColorStore from "./store"

export default function Game(props) {

  const { setCurrentAnswer, levelUp } = useColorStore();
  const [currentColor, setCurrentColor] = useState("red")
  const [shadeLevel, setShadeLevel] = useState(0)
  const [loading, setLoading] = useState(true)

  const colorShades = {
    red: ["bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700"],
    yellow: ["bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700"],
    green: ["bg-green-200", "bg-green-300", "bg-green-400", "bg-green-500", "bg-green-600", "bg-green-700"],
    blue: ["bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700"],
    purple: ["bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700"],
    amber: ["bg-amber-200", "bg-amber-300", "bg-amber-400", "bg-amber-500", "bg-amber-600", "bg-amber-700"],
    lime: ["bg-lime-200", "bg-lime-300", "bg-lime-400", "bg-lime-500", "bg-lime-600", "bg-lime-700"],
    emerald: ["bg-emerald-200", "bg-emerald-300", "bg-emerald-400", "bg-emerald-500", "bg-emerald-600", "bg-emerald-700"],
    cyan: ["bg-cyan-200", "bg-cyan-300", "bg-cyan-400", "bg-cyan-500", "bg-cyan-600", "bg-cyan-700"],
    zinc: ["bg-zinc-200", "bg-zinc-300", "bg-zinc-400", "bg-zinc-500", "bg-zinc-600", "bg-zinc-700"],
    stone: ["bg-stone-200", "bg-stone-300", "bg-stone-400", "bg-stone-500", "bg-stone-600", "bg-stone-700"],
    rose: ["bg-rose-200", "bg-rose-300", "bg-rose-400", "bg-rose-500", "bg-rose-600", "bg-rose-700"],
  }

  function ListColor(color, index) {
    return <EachColor key={index} color={color} clicked={props.checkAnswer} id={index} />
  }

  if (props.loading) {
    return <h1>Loading...</h1>
  }

  return(
    <div className="flex items-center py-10 flex-col">
      <div className={`h-48 w-48 ${colorShades[props.color][props.shadeLevel]} duration-300`} data-testid="colorBox"></div>
      <div className="flex w-[360px] gap-[40px] flex-wrap py-14">
        {colorShades[props.color].map(ListColor)}
      </div>
    </div>
  )
}