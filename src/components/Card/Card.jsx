import moodsOfMaya from "../../data/database"
import { BestPart, SelectedMood, PhotoAndDescription, ImageMood, MoodOfDay, TypeOfMood  } from './styles';
import Carousel from "react-elastic-carousel";
import './style.css'

const Card = () => {
    return(
      <BestPart>
      <Carousel>
        {moodsOfMaya.map(mood => 
          <SelectedMood key={mood.id}>
            <PhotoAndDescription>
            <ImageMood src={mood.pic} alt={mood.nameOfMood} />
            <MoodOfDay> {mood.nameOfMood} </MoodOfDay>           
            <TypeOfMood> {mood.type}</TypeOfMood>
              </PhotoAndDescription>
          </SelectedMood>
        )}
      </Carousel>
      </BestPart>
    )
  
  }
  export default Card
