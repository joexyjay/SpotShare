import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validator";
import Button from "../../shared/components/FormElements/Button";
import useForm from "../../shared/hooks/form-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        element="input"
        type="text"
        label="Title"
        id="title"
        validators={[{ ...VALIDATOR_REQUIRE(), value: "" }]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        element="textarea"
        type="text"
        label="Description"
        id="description"
        validators={[{ ...VALIDATOR_MINLENGTH(5), value: "" }]}
        errorText="Please enter a valid DESCRIPTION (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        element="address"
        type="text"
        label="Address"
        id="address"
        validators={[{ ...VALIDATOR_REQUIRE(), value: "" }]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};
export default NewPlace;
