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
            <h3 className="text-xl font-semibold text-blue-500">Cbet</h3>
            <p className="text-muted-foreground">
            La CB la haremos <b>cuando liguemos una mano fuerte y cuando no tengamos absolutamente nada también</b>, aquí nuestros primeros Bluff, cuando no tengamos nada y hacemos la CB diremos que estamos haciendo una CB de Bluff.<br></br>

<b>CB de Bluff:</b> la haremos cuando el Flop sea <Badge>Axx</Badge>, <Badge>Kxx</Badge>, <Badge>Qxx</Badge>, <Badge>Jxx</Badge>, <Badge>monocolor</Badge> (todas del mismo palo) o cuando haya <Badge>carta doblada</Badge>.<br></br>

<Badge>Axx</Badge> quiere decir que la carta más alta es el As, las otras 2 cartas puedes ser cualquiera que se nos ocurra, lo mismo para <Badge>Kxx</Badge>, <Badge>Qxx</Badge>, <Badge>Jxx</Badge>.<br></br>

<b>Los proyectos los jugaremos agresivos</b>, si en el Flop tenemos solo Carta Alta pero tenemos un proyecto de color o de escalera también haremos la CB de Bluff.<br></br>
            </p><br></br>
            <h3 className="text-xl font-semibold text-red-500">Tamaño de apuesta</h3>
            <p className="text-muted-foreground">
            Si notamos que en la siguiente calle se puede completar un <b>proyecto</b> que nos ganaría apostaremos más grande entre <Badge>2/3</Badge> y <Badge>3/4</Badge> del pot, en cambio <b>si en la siguiente calle no se completa ningún proyecto</b> podemos apostar entre <Badge>1/2</Badge> y <Badge>1/3</Badge> del Pot. <b>Si nos enfrentamos a un recreacional</b> la apuesta mínima es de <Badge>3/4</Badge> por valor, si sabes que no foldea puedes incluso apostarle cerca del pot.
            <br></br><br></br>
            <b>¿Qué hacemos si nos suben?</b> Si nos hacen un raise a la CB tenemos que poner al rival en un set (aunque a veces será un Bluff, dobles parejas o top par, en principio lo vamos a respetar) <b>pagaremos con manos que en el Turn le pueden ganar a Set</b>, veamos algunos ejemplos:
            </p>
            <br></br>
            <b>Dobles Parejas:</b> como <Badge>Q♣️ T♣️</Badge>en <Badge>Q♦️ T♠️ 8♣️</Badge>, si el rival apuesta en el Turn tiene set de 8 no hay otra, foldeamos si no cae una Q o un T (foldeamos una apuesta en el Turn si no nos cae el Full).
            <br></br>
            <b>Overpairs:</b> son parejas con encima del flop como <Badge>K♦️ K♠️</Badge>en <Badge>J♥️ 6♣️ 4♦️</Badge> , pensemos que el rival tiene set de 6 o de 4, así que pagaremos para ver si el turn trae el milagro del rey, si no cae foldearemos en Turn.
            <br></br>
            <b>Proyectos:</b> las manos que estamos pagando el raise a la CB son manos que nos darían una mejor mano que la del rival en el Turn, así que con <Badge>A♥️ T♥️</Badge> en <Badge>J♣️ 8♥️ 7♥️</Badge> podemos pagar y debemos pensar que el rival tiene set o la escalera, buscamos el color en Turn y si no cae foldearemos.
          </div>
        </div>
      </div>
    </div>
  );
}
