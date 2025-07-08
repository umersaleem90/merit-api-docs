---
sidebar_position: 2
---

# Authentication

The Merit LMS API uses a centralized authentication system through the **Merit Identity Service** to secure all requests. This guide explains how authentication works and how to manage your API keys.

## Overview

All API requests to the Merit LMS Service are authenticated through the **Merit Identity Service**, which handles all authentication, authorization, and role-based access control. The Identity Service validates Bearer tokens and API keys before allowing access to LMS resources.

## Authentication Architecture

### Merit Identity Service

The Merit Identity Service is a centralized authentication and authorization service that:

- **Validates Bearer Tokens**: All JWT Bearer tokens are verified and validated
- **Manages API Keys**: Validates x-api-key headers for specific endpoints
- **Role-Based Access Control**: Enforces permissions and role-based access
- **Tenant Isolation**: Ensures proper tenant-level access control
- **Security Policies**: Applies security policies and rate limiting

**Identity Service URL**: `https://develop-backend-idp-app-898785615088.us-central1.run.app`

### Authentication Flow

1. **Client Request**: Your application sends a request to the Merit LMS API
2. **Identity Service Validation**: The LMS Service forwards authentication to the Identity Service
3. **Token/Key Verification**: The Identity Service validates the Bearer token or API key
4. **Permission Check**: Role-based permissions are verified
5. **Request Processing**: If authentication succeeds, the LMS Service processes your request

## API Key Authentication

### Header Format

Include your API key in the `Authorization` header using the Bearer token format:

```http
Authorization: Bearer YOUR_API_KEY_HERE
```

### Alternative: x-api-key Header

For specific endpoints that support direct API key authentication, you can use the `x-api-key` header:

```http
x-api-key: YOUR_API_KEY_HERE
```

### Example Request

```bash
curl -X GET "https://develop-backend-lms-app-898785615088.us-central1.run.app/tenants/{tenant_id}/members" \
  -H "Authorization: Bearer your-api-key-here" \
  -H "Content-Type: application/json"
```

## Getting Your API Key

### For Administrators

1. **Access the Admin Panel** - Log into your Merit LMS admin dashboard
2. **Navigate to API Keys** - Go to Settings → API Keys
3. **Generate New Key** - Click "Generate New API Key"
4. **Copy the Key** - Save the generated key securely

### For Developers

Contact your system administrator to:
- Get access to the admin panel
- Generate an API key for your development environment
- Set appropriate permissions and expiry dates

## API Key Management

### Key Properties

- **Tenant-Specific**: Each API key belongs to a specific tenant
- **Scoped Access**: Keys provide access to all resources within the tenant
- **Expiry Support**: Keys can have optional expiration dates
- **Revocation**: Keys can be revoked at any time
- **Identity Service Managed**: All key validation is handled by the Identity Service

### Security Best Practices

1. **Keep Keys Secure** - Never commit API keys to version control
2. **Use Environment Variables** - Store keys in environment variables
3. **Rotate Regularly** - Generate new keys periodically
4. **Monitor Usage** - Track API key usage for security
5. **Revoke Unused Keys** - Remove keys that are no longer needed

## Error Responses

### Invalid API Key

```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing API key",
  "statusCode": 401
}
```

### Expired API Key

```json
{
  "error": "Unauthorized",
  "message": "API key has expired",
  "statusCode": 401
}
```

### Missing API Key

```json
{
  "error": "Unauthorized",
  "message": "API key is required",
  "statusCode": 401
}
```

### Insufficient Permissions

```json
{
  "error": "Forbidden",
  "message": "Insufficient permissions for this operation",
  "statusCode": 403
}
```

## Code Examples

### JavaScript/Node.js

```javascript
const axios = require('axios');

const apiKey = process.env.MERIT_API_KEY;
const baseURL = 'https://develop-backend-lms-app-898785615088.us-central1.run.app';

const api = axios.create({
  baseURL,
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
});

// Example: Get members
const getMembers = async (tenantId) => {
  try {
    const response = await api.get(`/tenants/${tenantId}/members`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data);
    throw error;
  }
};
```

### Python

```python
import requests
import os

api_key = os.getenv('MERIT_API_KEY')
base_url = 'https://develop-backend-lms-app-898785615088.us-central1.run.app'

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

# Example: Get members
def get_members(tenant_id):
    try:
        response = requests.get(
            f'{base_url}/tenants/{tenant_id}/members',
            headers=headers
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f'API Error: {e}')
        raise
```

### cURL

```bash
# Set your API key as an environment variable
export MERIT_API_KEY="your-api-key-here"

# Example: Get members
curl -X GET \
  "https://develop-backend-lms-app-898785615088.us-central1.run.app/tenants/{tenant_id}/members" \
  -H "Authorization: Bearer $MERIT_API_KEY" \
  -H "Content-Type: application/json"
```

## Rate Limiting

API requests are rate-limited per tenant to ensure fair usage:

- **Rate Limit**: 1000 requests per minute per tenant
- **Headers**: Rate limit information is included in response headers
- **Exceeded**: Returns 429 Too Many Requests when limit is exceeded

### Rate Limit Headers

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## Testing Authentication

You can test your API key using the health check endpoint:

```bash
curl -X GET \
  "https://develop-backend-lms-app-898785615088.us-central1.run.app/tenants/{tenant_id}/me" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

A successful response indicates your API key is valid:

```json
{
  "id": "tenant-uuid",
  "name": "Your Tenant Name",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

## Identity Service Integration

### How It Works

1. **Request Interception**: When a request reaches the LMS Service, it's intercepted for authentication
2. **Identity Service Call**: The LMS Service calls the Identity Service to validate credentials
3. **Permission Validation**: The Identity Service checks user roles and permissions
4. **Response**: If valid, the request proceeds; if invalid, an error is returned

### Benefits

- **Centralized Security**: All authentication logic is centralized
- **Consistent Policies**: Uniform security policies across all services
- **Scalable**: Identity Service can handle authentication for multiple services
- **Audit Trail**: Comprehensive logging of all authentication events

## What's Next?

- **[Quick Start Guide](./quick-start)** - Get up and running with your first API calls
- **[API Reference (v1.0)](/docs/lms-v1-0/merit-lms-alpha-api)** - Explore all available endpoints
- **[API Reference (Alpha)](/docs/lms-valpha/merit-lms-alpha-api)** - Explore alpha version endpoints 