import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function Page() {
  return (
    <div className="grid md:grid-cols-2 gap-6 py-12 px-4 w-full">
      <div className="rounded-lg overflow-hidden">
        <img
          src="/tables/preflop/or_call3bet_call4bet.png"
          alt="Image"
          width={800}
          height={600}
          className="w-full h-full"
        />
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">OR</h3>
            <p className="text-muted-foreground">
              Todos los colores juntos son todas las manos que haremos OR por
              posición.<br></br>Abrir a:<br></br>
              <Badge>3bb</Badge> desde UTG, MP, CO y SB desde el BU subiremos a <Badge>2,5bb</Badge>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-500">Azul Oscuro</h3>
            <p className="text-muted-foreground">
              <b>Call vs 3Bet</b> (miramos la posición desde donde hicimos OR)
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-500">Naranja</h3>
            <p className="text-muted-foreground">
              <b>Raise to 4Bet</b> (Miramos la posición desde donde hicimos OR)<br>
              </br>
              El tamaño de la 4Bet debe ser casi <b>2,5 veces el tamaño del 3Bet del villano</b>, le subiremos 2 veces y media la apuesta del rival.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-500">Rojo</h3>
            <p className="text-muted-foreground">
              <b>4Bet Bluff</b> (Elegimos una de las 2 - ATo o KJo y hacemos
              4Bet Bluff, más información en 4Bet Pot)
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Utils</h3>
            <p className="text-muted-foreground">
              *<b>¿Qué manos jugamos en SB?</b> Vamos jugar las mismas manos que
              en BU en principio. <br></br>
              *<b>¿Qué hacemos si nosotros 3Beteamos y recibimos una 4Bet?</b> Lo que está Prohibido es pagar, nos moveremos All-In con el rango de 4Bet dependiendo de la posición del jugador que abrió, si nuestra mano no está en el rango de 4Bet foldearemos, jamás pagaremos una 4Bet en NL2, queda prohibido de momento.<br></br>
              *<b>¿Con qué manos haremos Raise Over Limp (ROL)</b>? Lo haremos
              con el rango de UTG. El tamaño del ROL será de OR nuestro a 3bb
              ($0,06) + 1bb ($0,02) por cada Limper y podemos agregar 1bb más si
              estamos en las ciegas (SB o BB).<br></br>
              Si el rival juega Limp-Raise nosotros responderemos como si nos estubiesen 3Beteando a UTG, pagaremos con AK, QQ-JJ y subiremos con AA-KK (Y si va All-In pagamos).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
