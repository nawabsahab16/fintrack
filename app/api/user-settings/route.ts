import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function GET(request: Request)  {
    const user = await currentUser();

  if(!user ) {
    redirect("/sign-in");
  }
  
  let userSettings = await prisma.userSettings.findUnique({
    where: {
        userId: user.id,
    },
  });
   
  if(!userSettings) {
    userSettings = await prisma.userSettings.create({
        data: {
            userId : user.id,
            currency : "INR",
        }
    })
  }
 revalidatePath("/")
return Response.json(userSettings);
   
}
