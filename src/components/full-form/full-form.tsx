import React from 'react'
import { FormButton } from '../form-button/form-button'
import { FormInput } from '../form-input/inputx'
import { ContainerForm } from '../form-input/styles'

export const SearchNickForm = () => {
   function handleSubmit(event) {
      event.preventDefault()
   }
  return (
    <form onSubmit={handleSubmit}>
      <ContainerForm>
        <FormInput />
        <FormButton />
      </ContainerForm>
    </form>
  )
}
