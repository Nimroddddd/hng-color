import Intro from "./components/Intro"
import Game from "./components/Game"
import useColorStore from "./components/store"
import { useState, useEffect } from "react"
import AnswerMessage from "./components/AnswerText"

export default function App() {

  const colors = ["red", "yellow", "green", "blue", "purple", "amber", "lime", "emerald", "cyan", "zinc", "stone", "rose"]
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

  const { levelUp, restart, score } = useColorStore();
  const [currentColor, setCurrentColor] = useState(colors[0])
  const [shadeLevel, setShadeLevel] = useState(0)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("Correct! ✅")
  const [visible, setVisible] = useState(false)

  function refreshColor() {
    let newColor = colors[Math.floor(Math.random() * colors.length)]
    while (newColor === currentColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)]
    }
    setShadeLevel(Math.floor(Math.random() * 6))
    setCurrentColor(newColor)
    setLoading(false)
  }

  useEffect(() => {
      refreshColor()
    }, [])

  async function checkAnswer(id) {
    if (id === shadeLevel) {
      triggerRight()
    } else {
      triggerWrong()
      restart()
    }
  }

  function triggerWrong() {
    setMessage("Wrong ❌");
    setVisible(true);
    setTimeout(() => alert(`Game over! Your score was ${score}`), 500)
    setTimeout(() => {
      setVisible(false);
      refreshColor()
    }, 1000)
  }

  function triggerRight() {
    setMessage("Correct! ✅");
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      refreshColor();
      levelUp()
    }, 1000)
  }

  return (
    <div className="bg-slate-600 h-[200vh] py-10">
      <Intro restart={refreshColor} />
      <AnswerMessage message={message} visible={visible} />
      <Game color={currentColor} shadeLevel={shadeLevel} loading={loading} checkAnswer={checkAnswer} />
    </div>
  )
}