import { ChangeEventHandler, FC, useMemo } from "react";
import { InputControlProps } from "../../../model/forms/control-props";
import "./InputControl.css";

const InputControl: FC<InputControlProps> = (props) => {
  const { type, name, label, required, value, onChange } = props;

  const changeEventHandler: ChangeEventHandler<HTMLInputElement> = (event) =>
    onChange(event.target.value);

  const className = useMemo(() => {
    let className = ["input-control"];

    if (required && !value) {
      className = [...className, "input-control--invalid"];
    }

    if (value) {
      className = [...className, "input-control--filled"];
    }

    return className;
  }, [value, required]);

  const inputLabel = useMemo(() => {
    let tmpLabel = label;

    if (required && !value) {
      tmpLabel = `${tmpLabel} *`;
    }

    return tmpLabel;
  }, [label, required, value]);

  return (
    <div className="input-control__container">
      <input
        onChange={changeEventHandler}
        value={value}
        className={className.join(" ")}
        name={name}
        type={type}
        id={name}
      />
      <label className="input-control__label" htmlFor={name}>
        {inputLabel}
      </label>
    </div>
  );
};

export default InputControl;
