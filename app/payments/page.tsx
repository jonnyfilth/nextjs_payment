import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pendente",
      email: "m@example.com",
    },
    {
        id: "728ed5p4",
        amount: 500,
        status: "efetuado",
        email: "teste@example.com",
      },
      {
        id: "728ed52f",
        amount: 1000,
        status: "processando",
        email: "term@example.com",
      },

  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
