"use client"
import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validations'
import React from 'react'

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={() => {}}
    />
  )
}

export default Page
