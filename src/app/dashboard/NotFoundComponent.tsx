import React from 'react'
import {notFound} from 'next/navigation'

function NotFoundComponent() {
  notFound();
    return (
    <div>NotFoundComponent</div>
  )
}

export default NotFoundComponent