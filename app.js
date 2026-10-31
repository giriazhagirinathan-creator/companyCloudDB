// ==========================================
// Lab 8: Node.js Driver - MongoDB Atlas Connection & Verification
// ==========================================

const { MongoClient } = require('mongodb');

// Step 1: Connect to Atlas Cluster via Node.js Driver string format:
// Replace <username> and <password> with your actual MongoDB Atlas database user credentials
const uri = process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/companyCloudDB?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas Cluster!");

    // Step 2: Verification Query executed on Atlas Cloud Database
    const db = client.db('companyCloudDB');
    const deploymentLogs = db.collection('deploymentLogs');

    // Insert cloud deployment log entry
    const logEntry = {
      environment: "Production-Cloud",
      provider: "AWS / MongoDB Atlas",
      status: "Active",
      deployedAt: new Date(),
      region: "us-east-1"
    };

    console.log("\n--- Inserting Cloud Deployment Log Entry ---");
    const insertResult = await deploymentLogs.insertOne(logEntry);
    console.log(`Document inserted with _id: ${insertResult.insertedId}`);

    // Query active deployment status
    console.log("\n--- Active Deployment Status ---");
    const activeDeployments = await deploymentLogs.find({ status: "Active" }).toArray();
    console.log(JSON.stringify(activeDeployments, null, 2));

  } catch (error) {
    console.error("Error executing queries on Atlas:", error);
  } finally {
    await client.close();
  }
}

run();

