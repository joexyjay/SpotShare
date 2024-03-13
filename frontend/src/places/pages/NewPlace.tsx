import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        id=""
        errorText="Please enter a valid title"
      />
    </form>
  );
};
export default NewPlace;
