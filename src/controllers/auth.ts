import { Request, Response } from 'express'
import { loginUser, registerNewUser } from '../services/auth'

const registerCtrl = async ({ body }: Request, res: Response): Promise<void> => {
  await registerNewUser(body)
  res.send('Usuario registrado')
}

const loginCtrl = async ({ body }: Request, res: Response): Promise<void> => {
  const responseUser = await loginUser(body)
  res.send(responseUser)
}

export { loginCtrl, registerCtrl }
