# RA2311003011322 - Backend Optimization & Logging

A backend application demonstrating **0/1 Knapsack optimization** with **logging middleware** integration.

## 📁 Project Structure

```
RA2311003011322/
├── /logging_middleware
│   └── Logger implementation for centralized logging
├── /backend_app
│   ├── src/
│   │   ├── controller.js      (API endpoint handler)
│   │   ├── service.js         (Business logic & Knapsack algorithm)
│   │   ├── logger.js          (Logging middleware)
│   │   ├── index.js           (Express server)
│   ├── package.json           (Dependencies)
│   ├── .env                   (Environment variables)
└── README.md
```

## 🚀 Setup Steps

### 1. Install Dependencies
```bash
cd backend_app
npm install
```

### 2. Configure Environment
Create `.env` file with:
```
TOKEN=your_access_token_from_evaluation_service
```

Get your token by:
1. **Register**: POST `http://20.207.122.201/evaluation-service/register`
2. **Auth**: POST `http://20.207.122.201/evaluation-service/auth`
3. **Copy token** to `.env`

### 3. Run Server
```bash
node src/index.js
```

Server runs on: `http://localhost:3000`

## 📡 API Details

### Endpoint: GET /optimize

**Request:**
```
GET http://localhost:3000/optimize
```

**Response:**
```json
{
  "totalImpact": 22
}
```

**What it does:**
- Fetches tasks from evaluation service with Duration and Impact
- Uses 0/1 Knapsack algorithm to maximize impact within time limit
- Returns optimal total impact value

## 🧠 Knapsack Algorithm

**Problem:** 
- Given tasks with Duration (weight) and Impact (value)
- Limited hours available
- Maximize total impact

**Solution:**
Dynamic Programming table where `dp[i][w]` = max impact using first i tasks with w hours.

**Complexity:**
- Time: O(n * maxHours)
- Space: O(n * maxHours)

## 📊 Logging Middleware

All operations logged via `Log()` function:
```javascript
await Log(stack, level, package, message)
```

**Parameters:**
- `stack`: "backend"
- `level`: "info" | "error" | "warn"
- `package`: Module name (e.g., "controller", "service")
- `message`: Description

**Example:**
```javascript
await Log("backend", "info", "controller", "Optimize called");
```

Logs sent to: `http://20.207.122.201/evaluation-service/logs`

## 🛠️ Technologies

- **Node.js** - Runtime
- **Express** - Web framework
- **Axios** - HTTP client
- **Dotenv** - Environment management

## ⚙️ Key Features

✅ API integration with evaluation service  
✅ Token-based authentication  
✅ Centralized logging middleware  
✅ 0/1 Knapsack optimization algorithm  
✅ Error handling with fallback mock data  
✅ Express.js REST API  

## 📝 Notes

- Mock data used if evaluation service unavailable
- Token expires after specified duration
- All logs require valid authentication token
- Knapsack algorithm handles edge cases (no tasks, insufficient time)

## 👤 Author

**Roll Number:** RA2311003011322  
**GitHub:** Damavarun

---

**Status:** ✅ Complete and Tested
