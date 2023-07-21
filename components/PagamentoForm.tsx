'use client'
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "./ui/button";

async function handleForm(event : any) {
    event.preventDefault();
    const data = {
        email : event.target.email.value,
        valor : event.target.valor.value,
        status : event.target.status.value,

    }
    try {
        const res = fetch('/api/payment/new', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)

        })
        const resposta = (await res).json();
        console.log(resposta)
    } catch (error) {
        console.log(error)
    }
}

export default function PagamentoForm() {
    return (
        <div className="flex w-full h-full justify-center items-center p-2">
            <form className="mt-1 border-2 border-red-950 rounded-md " method="POST" onSubmit={handleForm}>
                <div className="p-2">
                    <h2 className="text-center"> Registrar Novo Pagamento</h2>
                    <hr/>
                    <br></br>
                    <Input placeholder="Email@example.com" id="email" name="email" type="email" required={true}/>
                    <br></br>
                    <Input placeholder="R$" id="valor" name="valor" type="number" required={true}/>
                    <br></br>
                    <Select name="status">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pendente">Pendente</SelectItem>
                            <SelectItem value="efetuado">Efetuado</SelectItem>
                            <SelectItem value="processando">Processando</SelectItem>
                        </SelectContent>
                    </Select>
                    
                </div>
                <div className="p-2">
                    <Button type="submit">Cadastrar</Button>
                </div>
                

            </form>
        </div>
    )
}