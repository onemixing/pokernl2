import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Layout({ children }) {
  const ap = "http://localhost:3000/";
  return (
    <div className="container mx-auto mt-8 w-full">
      <div className="buttons flex gap-2">
        <Link href={ap + "flop/flopPages/strongHands"}><Button variant="outline">Strong Hands</Button></Link>
        <Link href={ap + "flop/flopPages/middleHands"}><Button variant="outline">Middle / Showdown Hands</Button></Link>
        <Link href={ap + "flop/flopPages/cbet"}><Button variant="outline">Cbet</Button></Link>
      </div>
      {children}
    </div>
  );
}
