import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function Stats({des, title} : {des: string, title: string}) {
  return (
    <Card className="w-64 p-2 px-2">
				<CardHeader className="px-2">
					<CardDescription className="mb-4">{des}</CardDescription>
					<CardTitle className="text-3xl">{title}</CardTitle>
				</CardHeader>
			</Card>
  )
}

export default Stats;
