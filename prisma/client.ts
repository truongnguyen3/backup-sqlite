import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const playlists = await prisma.playlist.findMany()
console.log(playlists)