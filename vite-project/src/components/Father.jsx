import { useContext } from "react"
import { giftContext } from "../context/GiftProvider"
import Son from "./Son"

const Father = () => {
 const {setGifts}  = useContext(giftContext);

 const addGifts = () =>{
    setGifts(['PC', 'Car' , 'Toy' , 'Game' ])
 }
  return (
    <div className="father">

        <h2>Father</h2>
        <button type="button" onClick={addGifts}>ADD GIFTS</button>
        <Son/>
    </div>
  )
}

export default Father
