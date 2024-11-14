import GiftProvider from "../context/GiftProvider"
import Father from "./Father"

const Grandfather = () => {
  return (
    <GiftProvider>
        <div className="grandfather">
        <h1>GrandFather</h1>
        <Father/>
        </div>
        
    </GiftProvider>
  )
}

export default Grandfather
