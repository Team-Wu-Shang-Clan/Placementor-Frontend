import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div className='flex h-screen w-full justify-center items-center'>
      <Button> Hello </Button>
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 20C65 20 40 50 40 85C40 120 100 180 100 180C100 180 160 120 160 85C160 50 135 20 100 20Z"
          fill="#2E86C1" stroke="#1B4F72" stroke-width="5" />

        <circle cx="100" cy="75" r="20" fill="#28B463" />
        <path d="M80 110C90 95 110 95 120 110C125 120 130 130 130 140C130 145 125 150 120 150H80C75 150 70 145 70 140C70 130 75 120 80 110Z"
          fill="#28B463" />
      </svg>
    </div>
  )
}

export default Page