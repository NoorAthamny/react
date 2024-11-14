import { useContext } from "react"
import { giftContext } from "../context/GiftProvider"

const Grandson = () => {
    const {gifts} = useContext(giftContext);
    // console.log(gifts);
    
  return (
    <div className="grandson">
      <h4>GrandSon - Gifts</h4>
      <ul>
        {
            gifts.map((gift, index) => 
                <li key={index}>{gift}</li>
            )
        }
      </ul>
    </div>
  )
}

export default Grandson
