/**
 * This file is used to provide an unique client to the database.
 * It uses global in development to deal with hot reload
 */

import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;
declare global {
    var prisma: PrismaClient;
};

if (process.env.NODE_ENV == 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;
