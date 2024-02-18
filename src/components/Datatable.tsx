'use client'
import React from "react"
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

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
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(()=>{
    setLoading(true)
    fetch(`/api/get_tickets?from=${from.toISOString()}&to=${to.toISOString()}`)
    .then((data)=>{
        data.json().then((json)=>{
            console.log(json)
            setLoading(false)
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
        <>
        {loading && (<CircularProgress/>)}
        {//@ts-ignore
        <MUIDataTable
        title={"Ticket List"}
        data={data}
        columns={columns}
        //@ts-ignore
        options={options}
      />}
       
       </>
       )
       

}

