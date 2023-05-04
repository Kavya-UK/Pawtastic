import { Select, Textarea } from 'flowbite-react';
import React from 'react'
import {  Field } from "react-final-form";

export default function InputComponent({
  value,
  name,
  component,
  placeholder,
  rows,
  type,
  isRequired,
  validate = () => {},
  className,
  showlabelRed = () => {}
}) {
  return (
    <Field
      value={value}
      type={type}
      name={name}
      validate={(value, form) => validate(value, form, name)}
    >
      {({ input, meta }) => (
        <div>
          <input
            name={name}
            component={component}
            placeholder={placeholder}
            className={
              className
                ? className
                : "w-full  mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            }
            type={type}
            rows={rows}
            required={isRequired}
            {...input}
          />

          {!(type === "checkbox") ? (
            <span className="text-left block pl-[5px] text-red-700">
              {
                <span
                  className={
                    meta.error && meta.touched ? "visible" : "invisible"
                  }
                >
                  {meta.error || "\xa0"}
                </span>
              }
            </span>
          ) : (
            showlabelRed(meta.error && meta.touched)
          )}
        </div>
      )}
    </Field>
  );
}
