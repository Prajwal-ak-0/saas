import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import axios from 'axios';

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        const encodedParams = new URLSearchParams();
        encodedParams.set('source_language', 'en');
        encodedParams.set('target_language', 'kn');
        encodedParams.set('text', prompt);

        const options = {
            method: 'POST',
            url: 'https://text-translator2.p.rapidapi.com/translate',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '9acef659e4mshc8d76aa81a52888p19b689jsnc73c8646d7e1',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
            data: encodedParams,
        };

        const response = await axios.request(options);
        console.log(response.data);

        return NextResponse.json(response.data);

    } catch (error) {
        console.log('[LANGUAGE_ERROR]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}