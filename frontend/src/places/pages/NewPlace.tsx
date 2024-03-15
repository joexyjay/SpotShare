import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        id=""
        validators={[{ ...VALIDATOR_REQUIRE(), value: "" }]}
        errorText="Please enter a valid title"
      />
    </form>
  );
};
export default NewPlace;
