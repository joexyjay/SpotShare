import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem';
import './PlaceList.css'

interface Place {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    address: string;
    creator: string;
    location: object
}

interface PlaceListProps {
  items: Place[]; // replace any with the type of the items
}

const PlaceList = (props: PlaceListProps) => {
    if(props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card className="" style={{}}>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    )
    }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem 
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
        />
      ))}
    </ul>
  )
}
export default PlaceList
