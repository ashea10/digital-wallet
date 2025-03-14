"use client";

import { useBalance } from "@repo/store/balance";

export default function Page() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}