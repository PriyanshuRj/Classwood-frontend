import React, { useState } from "react";

import DashHeader from "./DashHeader";
import Dashboard from "../UI/Dashboard/dashboard";
export default function StudentDashboard({children}) {
  return (
    <Dashboard>

    <div className="w-full">
      <DashHeader />
      {/* <!-- Navbar end --> */}

          {children}
    </div>
    </Dashboard>
  );
}
