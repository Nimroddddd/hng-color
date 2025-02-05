export default function EachColor({color, clicked, id}) {
  return (
    <div className={`${color} h-10 w-40 border-2 border-white rounded hover:border-black duration-300 cursor-pointer hover:scale-110`} onClick={() => clicked(id)} data-testid="colorOption"></div>
  )
}