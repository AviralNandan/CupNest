import { pledge_template } from "@/util/mails/pledge_template";
import { sendGmail } from "@/util/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const data = await req.json()

    const a = await sendGmail(
        data.email,
        "Take the pledge",
        pledge_template()
    )

    return NextResponse.json({ success: true })
}