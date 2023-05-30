import { request } from 'http'
import { NextResponse } from 'next/server'

export async function GET() {
  const userData = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  }

  return NextResponse.json({ data: userData }, { status: 200 })
}

export async function PUT(request: Request) {
  const { firstName, lastName, email } = await request.json()

  updateUser(firstName, lastName, email)

  const updatedUserData = {
    firstName,
    lastName,
    email,
  }

  return NextResponse.json({ data: updatedUserData })
}

function updateUser(firstName: any, lastName: any, email: any) {}
