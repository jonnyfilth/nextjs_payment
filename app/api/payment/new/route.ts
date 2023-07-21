import { NextResponse, NextRequest } from "next/server";
import { createPayment } from "@/lib/db";

export  async function GET(request : NextRequest) {
    // GET all payments
    return NextResponse.json({})
  
  }


export  async function POST(request : NextRequest) {
    const data : any = request.json()
    const dbPayment = await createPayment(data)
    console.log(dbPayment)
    return NextResponse.json({ data : dbPayment})
}

// import type { NextApiRequest, NextApiResponse } from "next";
// import { createPayment } from "@/lib/db";

// export default async function handler( req : NextApiRequest, res : NextApiResponse) {
//     if (req.method === 'POST') {
//         const data = JSON.parse(req.body[0]);
//         console.log(data)

//         // const { email, valor, status} = data;
//         // await createPayment(email,valor,status);
//         // return res.status(201).json({ message : 'Criado com sucesso.'});
//     }
// }