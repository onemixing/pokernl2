import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function Page() {
  return (
    <div className="grid md:grid-cols-2 gap-6 py-12 px-4 w-full">
      <div className="rounded-lg overflow-hidden">
        <img
          src="/tables/preflop/3bet_coldcall.png"
          alt="Image"
          width={800}
          height={600}
          className="w-full h-full"
        />
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-500">Manos medias o de Showdown</h3>
            <p className="text-muted-foreground">
            <b>Son las TP débiles</b>, es decir con kicker “T” o menor, también las segundas y terceras. Las Manos de Showdown jamás las vamos a apostar, las jugaremos a check-call.<br></br><br></br>
             Dentro de este grupo estarán las Manos de Showdown que pueden mejorar a las Nuts, por ejemplo una segunda pareja con proyecto de color. K♥️J♥️ en A♥️J♠️6♥️ , parece que llevamos un cañón pero es una segunda pareja, si apostamos y nos suben vamos a querer pagar porque pensamos que llevamos un cañón y al pagar estamos haciendo un pozo gigante con segunda pareja, el rival puede llevar TP o un set y podríamos ir dominados, <br>
            </br><br></br><b>La mano se juega a Check-Call</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
