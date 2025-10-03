"use client";

import { getCurrentUser } from "@/lib/store";
import { CartComponent } from "@/components/CartComponent";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Cart() {
  const currentUser = getCurrentUser();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/connexion");
      return;
    }
  }, []);

  return <CartComponent />;
}
