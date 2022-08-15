import { v4 as uuid } from 'uuid';
import asyncHandler from 'express-async-handler'

const users = {
    "testuser1": "password1",
    "testuser2": "password2"
}

class Session {
    constructor(username, expiresAt) {
        this.username = username
        this.expiresAt = expiresAt
    }

    isExpired() {
        this.expiresAt < (new Date())
    }
}

const sessions = {}

export const signinHandler = asyncHandler(async(req, res) => {
    const { username, password } = req.body
    if (!username) {
        res.status(401)
        throw new Error('Auth Error')
    }

    const expectedPassword = users[username]
    if (!expectedPassword || expectedPassword !== password) {
        res.status(401)
        throw new Error('Auth Error')
    }

    const sessionToken = uuid()

    const now = new Date()
    const expiresAt = new Date(+now + 1000 * 1000)

    const session = new Session(username, expiresAt)
    sessions[sessionToken] = session

    res.cookie("session_token", sessionToken, { expires: expiresAt })
    res.status(200).json({ toDo: "For Further private requests, please set the `Set-Cookie` headers value to the Set-Cookie value present in this response "})
    res.end()
})

export const authHandler = asyncHandler(async(req, res, next) => {
    if (!req.cookies) {
      res.status(401)
      throw new Error('No cookies present')
    }

    const sessionToken = req.cookies['session_token']
    if (!sessionToken) {
        res.status(401)
        throw new Error('session_token missing')
    }
  
    const userSession = sessions[sessionToken]
    if (!userSession) {
        res.status(401)
        throw new Error(`userSession not present`)
    }
  
    if (userSession.isExpired()) {
        delete sessions[sessionToken]
        res.status(401)
        throw new Error('session expired')
    }

    next()
})