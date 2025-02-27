"use client";
import {useState} from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Checkbox } from "@/components/ui/checkbox";

function Todo({ title, todos }: { title: string; todos: string[] }) {
  const [todoDone, setTodoDone] = useState(0);
	return (
		<Card className="w-96">
			<CardHeader>
				<CardTitle className="text-3xl">{`${title} (${todoDone}/${todos.length})`}</CardTitle>
			</CardHeader>
			<CardContent>
				{todos.map((todo, i) => {
					return (
						<div
							key={i}
							className="flex items-start space-x-2 my-2"
						>
							<Checkbox id={`todo-${i}`} className="border-black mt-[.4rem] mr-3" onCheckedChange={(checked)=>{
                if(checked){
                  setTodoDone(todoDone + 1);
                } else{
                  setTodoDone(todoDone - 1);
                }
                
              }}/>
							<label
								htmlFor={`todo-${i}`}
								className="text-lg  font-medium leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
							>
								{todo}
							</label>
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
}

export default Todo;
