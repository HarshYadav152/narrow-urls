import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const body = await request.json();

        // Validate input
        if (!body.url || !body.narrowUrl) {
            return Response.json({ success: false, error: true, message: "URL and Narrow URL cannot be empty" }, { status: 400 });
        }

        // Validate proper URL format
        const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)\S*$/;
        if (!urlPattern.test(body.url)) {
            return Response.json({ success: false, error: true, message: "Invalid URL format" }, { status: 400 });
        }

        // Validate narrow URL format (only letters, numbers, and dashes)
        const narrowUrlPattern = /^[a-zA-Z0-9-]+$/;
        if (!narrowUrlPattern.test(body.narrowUrl)) {
            return Response.json({ success: false, error: true, message: "Narrow URL can only contain letters, numbers, and dashes" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("narrowlinks");
        const collection = db.collection("url");

        // Check if the narrow URL already exists
        const doc = await collection.findOne({ narrowUrl: body.narrowUrl });
        if (doc) {
            return Response.json({ success: false, error: true, message: "Narrow URL already exists" }, { status: 409 });
        }

        // Insert into the database
        await collection.insertOne({
            url: body.url,
            narrowUrl: body.narrowUrl,
        });

        return Response.json({ success: true, error: false, message: "URL generated successfully" }, { status: 201 });

    } catch (error) {
        console.error("Error processing request:", error);
        return Response.json({ success: false, error: true, message: "Internal Server Error" }, { status: 500 });
    }
}
