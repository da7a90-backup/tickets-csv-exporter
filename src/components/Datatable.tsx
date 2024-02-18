'use client'
import React from "react"
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import { useState } from "react";

type DatatableProps = {
    to: Date,
    from: Date
}

type Ticket = {
    name: string
    email: string
    badd_order_id: string
    ticket_number: string
    phone_number: string
}

export function Datatable({to, from}: DatatableProps){

    const [data, setData] = useState<Ticket[]>([])

    useEffect(()=>{
    fetch(`https://baddworldwide-api.herokuapp.com/api/v1/tickets?from=${from.toISOString()}&to=${to.toISOString()}`)
    .then((data)=>{
        data.json().then((json)=>{
            console.log(`https://baddworldwide-api.herokuapp.com/api/v1/tickets?from=${from.toISOString()}&to=${to.toISOString()}`)
            console.log(json)
            setData(json)
        })
    })
    },[to,from])

    const columns = [
        {
         name: "name",
         label: "Name",
         options: {
          filter: false,
          sort: false,
         }
        },
        {
         name: "email",
         label: "Email",
         options: {
          filter: false,
          sort: false,
         }
        },
        {
         name: "badd_order_id",
         label: "Badd Order ID",
         options: {
          filter: false,
          sort: false,
         }
        },
        {
         name: "ticket_number",
         label: "Ticket Number",
         options: {
          filter: false,
          sort: false,
         }
        },
        {
        name: "phone_number",
        label: "Phone Number",
        options: {
          filter: false,
          sort: false,
        }
        },
       ];
       
       
       
       const options = {
         filter: false,
       };
       
       return (
        //@ts-ignore
       <MUIDataTable
         title={"Ticket List"}
         data={data}
         columns={columns}
         //@ts-ignore
         options={options}
       />)
       

}

