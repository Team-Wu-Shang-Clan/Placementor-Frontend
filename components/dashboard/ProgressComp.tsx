import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "@/components/ui/progress"

interface ProgressType{
  skillName: string,
  percentage: number
}



function getColor(){
  const colors = ["red", "yellow", "green"];
  const randomIndex = Math.floor(Math.random() * 2) + 0;
  console.log(colors[randomIndex]);
  
  return colors[randomIndex];
}

function ProgressComp({title, progresses}: {title:  string, progresses: ProgressType[]}){

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {
          progresses.map((prg, i) => {
            return <div key={i} className="m-4">
              <div className="flex justify-between"><p>{prg.skillName}</p> <p>{prg.percentage}%</p></div>
              <Progress value={prg.percentage} className={`[&>div]:bg-${getColor()}-500`} />
            </div>
          })
        }
      </CardContent>
    </Card>
  )
}

export default ProgressComp;