// ==========================================
// Lab 8: MongoDB Atlas Cloud Deployment & Verification
// ==========================================

// Step 1: Connect to Atlas Cluster via Node.js Driver / Mongo Shell string format:
// mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/companyCloudDB

// Step 2: Verification Query executed on Atlas Cloud Database
use('companyCloudDB');

// Insert cloud deployment log entry
console.log("\n--- Inserting Cloud Deployment Log Entry ---");
const insertResult = db.deploymentLogs.insertOne({
  environment: "Production-Cloud",
  provider: "AWS / MongoDB Atlas",
  status: "Active",
  deployedAt: new Date(),
  region: "us-east-1"
});
console.log("Insertion Result:", insertResult);

// Query active deployment status
console.log("\n--- Active Deployment Status ---");
const activeLogs = db.deploymentLogs.find({ status: "Active" }).toArray();
console.log(JSON.stringify(activeLogs, null, 2));

