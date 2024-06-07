"use client";
import React from "react";
import { Alert, Button, Typography } from "./MTailwind";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AlertWithContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {!open && (
        <Button className="absolute " onClick={() => setOpen(true)}>
          Show Alert
        </Button>
      )}
      <Alert
        open={open}
        className="w-full bg-white"
        onClose={() => setOpen(false)}
      >
        <Typography variant="h5" color="black">
          Welcome back, John Doe
        </Typography>
        <Typography color="black" className="mt-2 font-normal">
          The end of the year is coming. Are you planning your performance
          interviews? You can do this super efficiently with Acmy. Look here for
          more information success is inner peace.
        </Typography>
      </Alert>
    </>
  );
}
