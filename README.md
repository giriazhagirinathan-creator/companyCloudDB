# Lab 8: MongoDB Atlas Cloud Deployment & Verification

A MongoDB project demonstrating connection to a MongoDB Atlas Cloud cluster and executing verification queries on deployment logs.

---

## 1. Database & Collection Details

### Database: `companyCloudDB`

### Collection: `deploymentLogs`
- `environment`: Deployment environment (e.g., `"Production-Cloud"`).
- `provider`: Cloud infrastructure and database provider (e.g., `"AWS / MongoDB Atlas"`).
- `status`: Health/deployment status flag (e.g., `"Active"`).
- `deployedAt`: Timestamp when the deployment took place (`ISODate` / `new Date()`).
- `region`: Cloud hosting region (e.g., `"us-east-1"`).

---

## 2. Step-by-Step Implementation

### Step 1: Atlas Cluster Connection Format
Connection string format for connecting to your MongoDB Atlas cluster via Mongo Shell or Node.js Driver:
```text
mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/companyCloudDB
```

> **Note:** Replace `<username>` and `<password>` with your database user credentials configured in MongoDB Atlas (under *Database Access*).

---

### Step 2: Verification Queries executed on Atlas Cloud Database

#### Switch to Database:
```javascript
use('companyCloudDB');
```

#### Insert Cloud Deployment Log Entry:
```javascript
db.deploymentLogs.insertOne({
  environment: "Production-Cloud",
  provider: "AWS / MongoDB Atlas",
  status: "Active",
  deployedAt: new Date(),
  region: "us-east-1"
});
```

#### Query Active Deployment Status:
```javascript
db.deploymentLogs.find({ status: "Active" }).pretty();
```

---

## 3. Expected Output

```json
[
  {
    "_id": "6ae5f7419d0b2723cf06a409",
    "environment": "Production-Cloud",
    "provider": "AWS / MongoDB Atlas",
    "status": "Active",
    "deployedAt": "2026-10-31T14:12:17.522Z",
    "region": "us-east-1"
  }
]
```

---

## 4. Usage Instructions

### Method 1: Using MongoDB Shell (`mongosh`)

#### A. Run locally:
```bash
mongosh deployment.js
```

#### B. Run directly against MongoDB Atlas:
```bash
mongosh "mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/companyCloudDB" --file deployment.js
```

---

### Method 2: Using VS Code MongoDB Extension
1. Open [deployment.mongodb.js](file:///c:/Users/User/OneDrive/Desktop/lab8/deployment.mongodb.js).
2. Connect to your Atlas cluster via the MongoDB extension sidebar.
3. Click the **Run** play icon (or press `Ctrl+Alt+R`).

---

### Method 3: Using Node.js Driver (`app.js`)

1. Install the MongoDB Node.js driver (if not already installed):
   ```bash
   npm install mongodb
   ```
2. Set your connection string in an environment variable or update [app.js](file:///c:/Users/User/OneDrive/Desktop/lab8/app.js):
   ```bash
   $env:MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/companyCloudDB"
   ```
3. Run the script:
   ```bash
   node app.js
   ```

