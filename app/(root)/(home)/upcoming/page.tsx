import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <section className="flex size-full text-white gap-10 flex-col">
    <h1 className='text-3xl font-bold'>
Upcoming
<CallList
type="upcoming"

/>
    </h1>
  </section>
  )
}

export default Upcoming
