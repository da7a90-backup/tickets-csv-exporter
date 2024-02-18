'use client'

import { useState } from "react";
import { Datatable } from "./Datatable";
import { DateSelector } from "./DateSelector"

export function Container(){
 
    const [to, setTo] = useState(new Date());
    const [from, setFrom] = useState(new Date());
    
    console.log(to.toISOString(),from.toISOString())

    return (<>
          <div className="px-20 py-20"><DateSelector to={to} from={from} setTo={setTo} setFrom={setFrom} /></div>
          <Datatable to={to} from={from} />
    </>)
}