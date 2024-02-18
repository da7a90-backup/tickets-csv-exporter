'use client'
import { FormLabel, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

type DateSelectorProps = {
    to: Date
    setTo: Dispatch<SetStateAction<Date>>
    from: Date
    setFrom: Dispatch<SetStateAction<Date>>
}

export function DateSelector({to, from, setTo, setFrom}: DateSelectorProps){

  return (
    <>
    <div className="px-5 py-5">
    {//@ts-ignore
   <><Typography fontFamily={"monospace"} fontWeight={800}>From :</Typography><DatePicker selected={from} onChange={(date) => setFrom(date)} showTimeSelect/></>
  }</div>
  <div className="px-5 py-5">
    {//@ts-ignore
    <><Typography fontFamily={"monospace"} fontWeight={800}>To : </Typography><DatePicker selected={to} onChange={(date) => setTo(date)} showTimeSelect/></>
    }
    </div>
    </>
    );
};