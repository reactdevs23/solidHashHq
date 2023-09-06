import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import StepWrapper from "../StepWrapper/StepWrapper";
import KeyValueInput from "./KeyValueInput/KeyValueInput";
import styles from "./EnvironmentVariables.module.css";

const EnvironmentVariables = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [values, setValues] = useState({
    key1: "",
    value1: "",
    key2: "",
    value2: "",
  });

  const [inputs, setInputs] = useState([
    {
      key: {
        type: "text",
        name: "key1",
        placeholder: "e.g. CLIENT_KEY",
      },
      value: {
        type: "text",
        name: "value1",
        placeholder: "Input your Value...",
      },
    },
    {
      key: {
        type: "text",
        name: "key2",
        placeholder: "e.g. CLIENT_KEY",
      },
      value: {
        type: "text",
        name: "value2",
        placeholder: "Input your Value...",
      },
    },
    {
      key: {
        type: "text",
        name: "key3",
        placeholder: "e.g. CLIENT_KEY",
      },
      value: {
        type: "text",
        name: "value3",
        placeholder: "Input your Value...",
      },
    },
    {
      key: {
        type: "text",
        name: "key4",
        placeholder: "e.g. CLIENT_KEY",
      },
      value: {
        type: "text",
        name: "value4",
        placeholder: "Input your Value...",
      },
    },
  ]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const onDeleteRow = (name) => {
    setInputs((prevInputs) =>
      prevInputs.filter((input) => input.key.name !== name)
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <StepWrapper
      heading="Step 3 :   Select Template"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={styles.titleAndTagline}>
        <p className={styles.title}>Environment Variables:</p>
        <p className={styles.tagline}>
          Environment Variables added to the Team can be used by all, or a
          subset of, your Projects.
        </p>
      </div>
      <form action="" className={styles.form} onSubmit={submitHandler}>
        <div className={styles.keyValueContainer}>
          <div className={[styles.labelContainer].join(" ")}>
            <p className={styles.label}>Key</p>
            <p className={styles.label}>Value</p>
            <div className={styles.box}></div>
          </div>
          {inputs.map((input, i) => (
            <KeyValueInput
              key={i}
              id={i}
              input={input}
              keyValue={{
                key: values[input.key.name],
                value: values[input.value.name],
              }}
              onChange={onChange}
              onDelete={() => onDeleteRow(input.key.name)}
            />
          ))}
        </div>{" "}
        <button className={styles.createNewKey}>
          {" "}
          <AiOutlinePlus className={styles.plusIcon} /> Create New KEY
        </button>
      </form>
    </StepWrapper>
  );
};

export default EnvironmentVariables;
