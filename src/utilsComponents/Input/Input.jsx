import React, { useEffect, useState } from "react";
import PictureIcon from "../../assets/icons/PictureIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import Checkbox from "./Checkbox/Checkbox";
import "./Input.sass";

/**
 * Represents an input configuration object.
 * @typedef {Object} InputConfig
 * @property {"text"|"password"|"email"|"number"|"tel"|"date"|"time"|"datetime-local"|"search"|"url"|"month"|"time"} [type="text"] - The type of input (e.g., "text", "input").
 * @property {string} [placeholder=""] - Placeholder text for the input field.
 * @property {string} [defaultValue=""] - Default value for the input field.
 * @property {string} [title=""] - Title attribute for the input field.
 * @property {string} [name=""] - Name attribute for the input field.
 * @property {Function} [onChange=(e) => {}] - Function to handle onChange event.
 * @property {boolean} [disabled=false] - Whether the input field is disabled.
 * @property {RegExp | null} [pattern=null] - Regular expression pattern for input validation.
 * @property {boolean} [required=false] - Whether the input field is required.
 * @property {boolean} [fullWidth=false] - Whether the input field should span the full width.
 * @property {string} [splitterTextArea="\\n"] - Splitter for text areas.
 * @property {number} [rows=10] - Number of rows for text areas.
 * @property {Function} [constraint=(val) => { return true; }] - Function to validate input.
 */
/**
 *
 * @param {InputConfig} props
 * @returns
 */
function Input(props) {
  const {
    type = "text",
    placeholder = "",
    defaultValue = "",
    title = "",
    name = "",
    onChange = (e) => {},
    disabled = false,
    pattern = null,
    required = false,
    fullWidth = false,
    splitterTextArea = "\\n",
    rows = 10,
    constraint = (val) => true,
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [fileLoaded, setFileLoaded] = useState(false);
  const [filePreview, setFilePreview] = useState("");
  const handleValue = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  const handleValueFile = (e) => {
    setFileLoaded(true);
    if (e.target.files.length > 0) {
      let pathFileLoaded = URL.createObjectURL(e.target.files[0]);
      setFilePreview(pathFileLoaded);
    }
    onChange({
      target: {
        value: e.target.files,
        name: e.target.name,
        type: "file",
      },
    });
  };

  const DefaultvalueFile = () => {
    if (type === "file" && defaultValue !== "" && defaultValue) {
      let pathFileLoaded = URL.createObjectURL(defaultValue);
      setFilePreview(pathFileLoaded);
    } else setFileLoaded(false);
  };

  useEffect(() => {
    setValue(defaultValue);
    if (type === "file") DefaultvalueFile();
    else onChange({ target: { value: defaultValue, name: name } });
  }, [defaultValue]);

  const handleNumeric = (e) => {
    if (isNaN(+e.target.value)) return "";
    if (constraint(+e.target.value)) {
      setValue(e.target.value);
      onChange(e);
    }
  };

  const handleTextArea = (e) => {
    let rows = e.target.value.split("\n");
    let newText = "";
    rows.forEach((row) => (newText += row + splitterTextArea));
    // use this for the default split .replace(/\\n/g, "\n")
    return { target: { value: newText, name: e.target.name } };
  };

  const isDateOn = () => {
    if (type === "date" || type === "month" || type === "datetime-local" || type === "time") return true;
    else return false;
  };
  const formateDateValue = (value) => {
    if (type === "date") return value.split("T")[0];
    else if (type === "datetime-local") return value.replace(":00.000+00:00", "");
    else return value;
  };
  return (
    <>
      {type === "file" ? (
        <div className={`input_ ${fullWidth ? "fullwidth" : ""}`}>
          <label htmlFor={name}>{title}</label>
          <label htmlFor={name} className="label_file_container">
            {!fileLoaded ? (
              <>
                <div className="icon">
                  <PictureIcon />
                </div>
                <div className="span"> Choose a file... </div>{" "}
              </>
            ) : (
              <>
                <div className="add_file">
                  <PictureIcon />
                </div>
                <img src={filePreview} alt="" id={title + "_" + name} />
              </>
            )}
          </label>
          <input
            style={{ display: "none" }}
            autoComplete="true"
            type={type}
            multiple
            accept="image/*"
            name={name}
            id={name}
            onChange={handleValueFile}
            placeholder={placeholder}
            // files={null}
            disabled={disabled}
          />
        </div>
      ) : type === "textarea" ? (
        <>
          <div className={`input_ ${fullWidth ? "fullwidth" : ""}`}>
            <label htmlFor={name}>{title}</label>
            <textarea
              name={name}
              autoComplete="true"
              id={name}
              placeholder={placeholder}
              rows={rows}
              onChange={(e) => {
                onChange(handleTextArea(e));
              }}
              disabled={disabled}
              defaultValue={value}
            ></textarea>
          </div>
        </>
      ) : type === "checkbox" ? (
        <>
          <Checkbox
            name={name}
            onChange={onChange}
            fullWidth={fullWidth}
            title={title}
            disabled={disabled}
            required={required}
            constraint={constraint}
            defaultValue={defaultValue}
          />
        </>
      ) : (
        <div className={`input_ ${fullWidth ? "fullwidth" : ""}`}>
          <label htmlFor={name}>{title}</label>
          {isDateOn() && (
            <label htmlFor={name} className="icon_calendar">
              <CalendarIcon />
            </label>
          )}

          <input
            autoComplete="true"
            type={type}
            name={name}
            required={required}
            id={name}
            pattern={pattern ? pattern : undefined}
            onChange={type === "number" ? handleNumeric : handleValue}
            placeholder={placeholder}
            value={isDateOn ? formateDateValue(value) : value}
            disabled={disabled}
            style={{ paddingRight: type === "date" ? "0.9rem" : "auto" }}
          />
        </div>
      )}
    </>
  );
}

export default Input;
