# Notification System Design

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│          API Request / Webhook Trigger             │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│      Notification Service (backend_app)            │
│  - Routes requests                                 │
│  - Validates data                                  │
│  - Logs operations                                 │
└──────────────────┬──────────────────────────────────┘
                   │
      ┌────────────┼────────────┐
      │            │            │
      ▼            ▼            ▼
   Email         SMS         Push
  Channel      Channel     Notification
```

## Components

### 1. Notification Service (Backend)
- **Endpoint**: POST `/notify`
- **Input**: Email, message, type
- **Output**: Notification status
- **Uses**: Centralized logging via `logging_middleware`

### 2. Logging Middleware
- All notifications logged with `Log()` function
- Tracks: timestamp, user, type, status
- Async operations for non-blocking logs

### 3. Database (Optional)
- Store notification history
- Track delivery status
- User preferences

## Data Flow

```
1. User triggers notification
   └─> Validate input
   └─> Log: "Notification initiated"
   └─> Send notification
   └─> Log: "Notification sent" / "Failed"
   └─> Return status to user
```

## Technologies Used

- **Backend**: Node.js + Express
- **Logging**: Custom middleware with Axios
- **API**: RESTful design
- **Authentication**: Bearer Token

## API Specification

### POST /notify
```json
Request:
{
  "email": "user@example.com",
  "type": "alert|info|warning",
  "message": "Notification text"
}

Response:
{
  "status": "success",
  "id": "notification_123",
  "sentAt": "2026-05-02T10:30:00Z"
}
```

## Future Enhancements

- [ ] SMS notifications
- [ ] Email templates
- [ ] Notification queue (Bull)
- [ ] Delivery tracking
- [ ] User preferences storage
- [ ] Rate limiting
