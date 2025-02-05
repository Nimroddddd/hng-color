import useColorStore from "./store"

 
export default function Intro(props) {

  const { score, restart } = useColorStore()

  function triggerRestart() {
    restart();
    props.restart()
  }

  return (
    <>
      <div className="flex justify-between px-4 sm:px-14 font-poppins text-orange-200 pb-4">
        <p className="text-lg md:text-3xl ml-0 font-display">Score: {score}</p>
        <h1 className="text-xl md:text-5xl font-display">GUESS THE COLOR</h1>
        <button className="p-1 md:p-3 bg-orange-200 text-slate-600 cursor-pointer" onClick={triggerRestart}>Restart</button>
      </div>
    </>
  )
}