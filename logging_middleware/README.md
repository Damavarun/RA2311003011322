# Logging Middleware

Centralized logging module for backend applications. Sends all application logs to the AFFORD evaluation service with proper authentication.

## Files

- `logger.js` - Main logger module
- Implementation details in [../README.md](../README.md)

## Usage

```javascript
const Log = require("./logging_middleware/logger");

await Log("backend", "info", "moduleName", "Message here");
```

## Features

✅ Async logging via Axios  
✅ Bearer token authentication  
✅ Centralized log aggregation  
✅ Error handling with silent failures  

## Stack

- Node.js
- Axios (HTTP client)
- Bearer Token Auth
