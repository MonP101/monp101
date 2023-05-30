import * as React from 'react'
import Dashboard from './component/dashboard'
import Head from './component/head'

export interface indexProps {}

export default function index(props: indexProps) {
  return (
    <div>
      <Head></Head>
      <Dashboard></Dashboard>
    </div>
  )
}
