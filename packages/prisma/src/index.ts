

import "dotenv/config";
import { PrismaClient } from '@prisma/client';
// add  no-var

import { PrismaPg } from '@prisma/adapter-pg'


const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
export const client = new PrismaClient({ adapter })
