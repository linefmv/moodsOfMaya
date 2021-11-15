import moodsOfMaya from "../../data/database"
import { SelectedMood, ImageMood, MoodOfDay, TypeOfMood  } from './styles';

const Card = () => {
    return(
      <>
        {moodsOfMaya.map(mood => 
          <SelectedMood key={mood.id}>
            <ImageMood src={mood.pic} alt={mood.nameOfMood}> </ImageMood>
            <MoodOfDay> {mood.nameOfMood} </MoodOfDay>           
            <TypeOfMood> {mood.type}</TypeOfMood>
          </SelectedMood>
        )}
      </>
    )
  
  }
  export default Card
