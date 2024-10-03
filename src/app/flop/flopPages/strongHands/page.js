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
            <h3 className="text-xl font-semibold text-blue-500">Manos fuertes</h3>
            <p className="text-muted-foreground">
            <b>Limite de 'Strong Hand'</b> el límite lo vamos a poner en una Top Par (TP) con “J” kicker o mejor, esas serán Manos Fuertes. El kicker es la otra carta que llevamos en la mano y acompaña a nuestro TP.<br></br><br></br>
            A♠️Q♥️ en A♣️ 9♦️ 3♠️, tenemos TP (el par más alto) y nuestro kicker es la “Q” con lo cual esto será una mano fuerte, en cambio si tenemos A♥️T♣️ en A♣️ 9♦️ 3♠️:, tenemos TP (el par más alto) pero nuestro kicker es el “T”, como es menor que la “J” no será una mano fuerte, lo consideraremos una mano media.<br></br>
            <br></br><b>Nuestras manos fuertes siempre las vamos a apostar</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
