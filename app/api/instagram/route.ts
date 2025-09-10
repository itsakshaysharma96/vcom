import { NextResponse } from "next/server";

export async function GET() {
//   const token = process.env.INSTAGRAM_ACCESS_TOKEN; // store in .env
  const url = `https://graph.instagram.com/760741496731302/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=EAAQyiYZCzC6oBPdyfdpuksmKy6tZBfFk4RFTBJs4WNIggNLAIRQqLbHmKmayTFHSuIt35cCAG4uAUwa8LnmPd59iKKNZAbdcb8mYXHB2pyMFB8V4eIKMRLJDZCqAohsj8NA2y75unLLKfer0DdtAyZARDDI46v7wfZAOH1gsBpD9ugz0Pynzq6ADLM2RS65KcNXf2XfSNstVYZBrOdaxprnNl0texCu75R1pKga`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch Instagram reels" }, { status: 500 });
  }
}
