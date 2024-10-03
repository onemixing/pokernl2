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
            <h3 className="text-xl font-semibold text-blue-500">Azul</h3>
            <p className="text-muted-foreground">
            <b>Cold Call</b> (CC dependiendo posición que hizo OR)
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-500">Rojo</h3>
            <p className="text-muted-foreground">
            <b>3Bet</b> (Mirando posición que hizo OR)<br></br>
              Si el rival abre a 3bb ($0,06)
              subiremos a <Badge>9bb</Badge> ($0,18 ) en MP, CO y BU. (El triple de su OR) Si
              el rival abre 3bb ($0,06) subiremos a <Badge>10bb</Badge>($0,20) en SB y BB. (El
              triple de su OR +1bb) Si el rival abre 2bb ($0,04) subiremos
              mínimo a <Badge>7bb</Badge> ($0,14) + 1bb ($0,02) si estamos en SB-BB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
