import React from 'react'

interface Props {
    children: React.ReactNode;
}

function DashboardLayaout ({children}: Props) {
  return (
    <div style={{color: "red",padding: "15ps"}}>{children} </div>
  )
}

export default DashboardLayaout 