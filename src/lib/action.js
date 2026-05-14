"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const logoutAction = async () => {

    await auth.api.signOut({
        headers: await headers(),
    });

    revalidatePath("/");
}
export default logoutAction;