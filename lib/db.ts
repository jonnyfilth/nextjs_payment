import { prisma } from "./prisma";

export interface IPayment {
    id?: number,
    email : string,
    valor : number,
    status : string,
}

export async function getAllPayments() {
    const data = await prisma.payment.findMany();
    return data;
}

export async function createPayment(data : IPayment) {
    await prisma.payment.create({
        data: {
            email : data.email,
            valor : data.valor,
            status : data.status
        }
    });
}