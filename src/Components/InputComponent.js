import { Select, Textarea } from 'flowbite-react';
import React from 'react'
import {  Field } from "react-final-form";

export default function InputComponent({
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
    <Field name={name} validate={(value, form) => validate(value, form, name)}>
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
            <span className="text-left block pl-[20px] text-red-700">
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </span>
          ) : (
            showlabelRed(meta.error && meta.touched && true)
          )}
        </div>
      )}
    </Field>
  );
}
