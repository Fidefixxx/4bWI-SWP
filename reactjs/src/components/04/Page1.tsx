import React from 'react'
import { Link } from 'react-router'
type Props = {}

export default function Page1({}: Props) {
  return (
    <div>Page1
        <Link to="/dashboard">Dashboard</Link>;
    </div>
    
  )
}