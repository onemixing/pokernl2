import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Layout({ children }) {
  const ap = "http://localhost:3000/";
  return (
    <div className="container mx-auto mt-8 w-full">
      <div className="buttons flex gap-2">
        <Link href={ap + "preflop/preflopPages/or_call3bet_call4bet"}><Button variant="outline">OR - Call vs 3Bet y 4Bet</Button></Link>
        <Link href={ap + "preflop/preflopPages/3bet_coldcall"}><Button variant="outline">3Bet y Cold Call</Button></Link>
      </div>
      {children}
    </div>
  );
}
