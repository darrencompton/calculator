import React from "react";
import Button from "../../components/Button";
import KeypadRow from "./keypad_row/keypad_row";
import LargeButton from "../../components/ButtonLarge";

const keypad = (props) => {
  return (
    <section className="keypad">
      <KeypadRow>
        <Button label="C" onButtonPress={props.onButtonPress}></Button>
        <Button label="&larr;" onButtonPress={props.onButtonPress}></Button>
        <Button label="%" onButtonPress={props.onButtonPress}></Button>
        <Button label="/" onButtonPress={props.onButtonPress}></Button>
      </KeypadRow>
      <KeypadRow>
        <Button label="9" onButtonPress={props.onButtonPress}></Button>
        <Button label="8" onButtonPress={props.onButtonPress}></Button>
        <Button label="7" onButtonPress={props.onButtonPress}></Button>
        <Button label="*" onButtonPress={props.onButtonPress}></Button>
      </KeypadRow>
      <KeypadRow>
        <Button label="6" onButtonPress={props.onButtonPress}></Button>
        <Button label="5" onButtonPress={props.onButtonPress}></Button>
        <Button label="4" onButtonPress={props.onButtonPress}></Button>
        <Button label="-" onButtonPress={props.onButtonPress}></Button>
      </KeypadRow>
      <KeypadRow>
        <Button label="3" onButtonPress={props.onButtonPress}></Button>
        <Button label="2" onButtonPress={props.onButtonPress}></Button>
        <Button label="1" onButtonPress={props.onButtonPress}></Button>
        <Button label="+" onButtonPress={props.onButtonPress}></Button>
      </KeypadRow>
      <KeypadRow>
        <Button label="0" onButtonPress={props.onButtonPress}></Button>
        <Button label="." onButtonPress={props.onButtonPress}></Button>
        <LargeButton
          label="="
          onButtonPress={props.onButtonPress}
        ></LargeButton>
      </KeypadRow>
    </section>
  );
};

export default keypad;
