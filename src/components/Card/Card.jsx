import moodsOfMaya from "../../data/database"
import { SelectedMood, PhotoAndDescription, ImageMood, MoodOfDay, TypeOfMood  } from './styles';
import Carousel from "react-elastic-carousel";
import './style.css'

const Card = () => {
    return(
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
    )
  
  }
  export default Card
