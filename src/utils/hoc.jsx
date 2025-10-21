import { Navbar } from "@/components/ui/navbar";
import React from "react";

function Hoc({ component }) {
  return (
    <div className="bg-red-400 sticky top-0">
      <Navbar />
    </div>
  );
}

export default Hoc;
