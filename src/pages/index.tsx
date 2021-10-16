import Card from "../components/Card";
import Illustracao from "../components/Illustracao";

export default function Home() {
  return (
    <div className="h-full flex bg-gradient-to-b from-softViolet to-softBlue">
      <Illustracao />
      <Card />
    </div>
  )
}