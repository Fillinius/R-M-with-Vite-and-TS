import * as React from 'react'

type TextFieldProps = {
  name: string
  value: string
  type: string
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  id: string
}

export const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  type,
  label,
  onChange,
  id,
}) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          id={name + id}
        />
      </label>
    </>
  )
}
