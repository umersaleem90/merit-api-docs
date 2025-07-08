---
sidebar_position: 3
---

# Quick Start Guide

Get up and running with the Merit LMS API in minutes. This guide will walk you through creating your first tenant, adding members, and setting up campaigns.

## Prerequisites

- Basic understanding of REST APIs
- cURL, Postman, or your preferred HTTP client

## Step 1: Create Your First Tenant

A tenant represents your organization's workspace in Merit LMS. All resources (members, points, campaigns) belong to a tenant. Tenant creation is handled by the **Merit Identity Service**.

### Tenant Creation Request

```bash
curl -X POST "https://develop-backend-idp-app-898785615088.us-central1.run.app/v1/tenants" \
  -H "Content-Type: application/json" \
  -d '{
    "key": "test-key2",
    "name": "Merit",
    "email": "admin@tintash.com",
    "password": "123456",
    "platformName": "lms"
  }'
```

### Request Body Properties

- **`key`**: Unique identifier for your tenant (used in API calls)
- **`name`**: Display name for your organization/tenant
- **`email`**: Admin email address (used for login and notifications)
- **`password`**: Admin password for the tenant
- **`platformName`**: Platform identifier (should be "lms" for Merit LMS)

### Response

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "key": "test-key2",
  "name": "Merit",
  "email": "admin@tintash.com",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

Save the `tenant_id` - you'll need it for all subsequent requests.

## Step 2: Get Your API Key

After tenant creation, you need to obtain an API key for authentication. You have two options:

### Option 1: Get API Key from Identity Service

```bash
curl -X GET "https://develop-backend-idp-app-898785615088.us-central1.run.app/v1/api-keys" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Option 2: Login with Admin Credentials

Use the email and password you used during tenant creation to get a JWT token:

```bash
curl -X POST "https://develop-backend-idp-app-898785615088.us-central1.run.app/v1/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@tintash.com",
    "password": "123456"
  }'
```

**Response:**
```json
{
  "access_token": "your-jwt-token-here",
  "refresh_token": "your-refresh-token-here",
  "expires_in": 3600
}
```

Use the `access_token` as your Bearer token for all LMS API calls.

## Step 3: Default Configurations

When a tenant is created, the following default configurations are automatically set up:

### Default Tenant Configs

```javascript
const tenantConfigs = [
  {
    tenantId,
    key: 'defaultCurrency',
    value: 'USD',
  },
  {
    tenantId,
    key: 'pointToCurrencyConversionRate',
    value: '1',
  },
  {
    tenantId,
    key: 'pointToCurrencyConversionValue',
    value: '100',
  },
  {
    tenantId,
    key: 'pointsExpiryNotificationDays',
    value: '2',
  },
  {
    tenantId,
    key: 'minRedeemablePoints',
    value: '100',
  },
  {
    tenantId,
    key: 'maxRedeemablePoints',
    value: '1000',
  },
  {
    tenantId,
    key: 'transactionRewardPercentage',
    value: '1',
  },
  {
    tenantId,
    key: 'pointsValidityDays',
    value: '30',
  },
  {
    tenantId,
    key: 'pointsExpiryEnabled',
    value: 'true',
  },
];
```

### Configuration Details

- **`defaultCurrency`**: Default currency for transactions (USD)
- **`pointToCurrencyConversionRate`**: Base conversion rate (1)
- **`pointToCurrencyConversionValue`**: Points per currency unit (100)
- **`pointsExpiryNotificationDays`**: Days before expiry to send notifications (2)
- **`minRedeemablePoints`**: Minimum points required for redemption (100)
- **`maxRedeemablePoints`**: Maximum points that can be redeemed at once (1000)
- **`transactionRewardPercentage`**: Default reward percentage per transaction (1%)
- **`pointsValidityDays`**: Days before points expire (30)
- **`pointsExpiryEnabled`**: Whether points expiry is enabled (true)

## Step 4: Default Triggers

The following triggers are automatically created for your tenant:

### Default Trigger Identifiers

```javascript
export const defaultTriggerIdentifiers = {
  REDEEM_POINTS: 'redeem_points',
  ORDER_VALUE: 'order_value',
  FIRST_PURCHASE: 'first_purchase',
  SPENDING_THRESHOLD: 'spending_threshold',
  PURCHASE_COUNT: 'purchase_count',
  INTERNAL_TRIGGER: 'internal_trigger',
  REFERRAL_BONUS: 'referral_bonus',
  REFEREE_BONUS: 'referee_bonus',
  SIGNUP_BONUS: 'signup_bonus',
  QR_CODE_SCAN: 'qr_code_scan',
};
```

### Default Triggers

```javascript
export const defaultTriggers = [
  {
    name: 'Redeem Points',
    systemIdentifier: 'redeem_points',
    type: 'BURN',
    supportedOperators: [],
    metadata: {},
  },
  {
    name: 'Order Value',
    systemIdentifier: 'order_value',
    type: 'PURCHASE',
    supportedOperators: ['=', '>=', '<=', '>', '<'],
    metadata: {},
  },
  {
    name: 'First Purchase',
    systemIdentifier: 'first_purchase',
    type: 'PURCHASE',
    metadata: {},
  },
  {
    name: 'Spending Threshold',
    systemIdentifier: 'spending_threshold',
    type: 'PURCHASE',
    supportedOperators: ['=', '>=', '>'],
    metadata: {},
  },
  {
    name: 'Purchase Count',
    systemIdentifier: 'purchase_count',
    type: 'PURCHASE',
    supportedOperators: ['=', '>=', '>'],
    metadata: {},
  },
  {
    name: 'Internal Trigger',
    systemIdentifier: 'internal_trigger',
    type: 'INTERNAL',
    supportedOperators: [],
    metadata: {},
  },
  {
    name: 'Referral Bonus',
    systemIdentifier: 'referral_bonus',
    type: 'ACHIEVEMENT',
    supportedOperators: [],
    metadata: {},
  },
  {
    name: 'Referee Bonus',
    systemIdentifier: 'referee_bonus',
    type: 'ACHIEVEMENT',
    supportedOperators: [],
    metadata: {},
  },
  {
    name: 'Signup Bonus',
    systemIdentifier: 'signup_bonus',
    type: 'ACHIEVEMENT',
    supportedOperators: [],
    metadata: {},
  },
];
```

### Trigger Types

- **`BURN`**: Points redemption and burning operations
- **`PURCHASE`**: Purchase-related triggers with order value and count
- **`INTERNAL`**: System-generated internal triggers
- **`ACHIEVEMENT`**: Achievement-based triggers like referrals and signups

## Step 5: Create Your First Member

Now you can start using the LMS API. Members are the users of your loyalty program.

```bash
curl -X POST "https://develop-backend-lms-app-898785615088.us-central1.run.app/tenants/550e8400-e29b-41d4-a716-446655440000/members" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "externalId": "CUST_001",
    "referralCode": "JOHN123",
    "joinDate": "2024-01-01T00:00:00Z",
    "metadata": {
      "source": "website_signup",
      "preferences": {
        "newsletter": true
      }
    }
  }'
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "tenant_id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "external_id": "CUST_001",
  "referral_code": "JOHN123",
  "join_date": "2024-01-01T00:00:00Z",
  "points_balance": 0,
  "total_points_earned": 0,
  "status": "active",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

## Step 6: Create Your First Tier

Tiers define member levels based on points, referrals, and events.

```bash
curl -X POST "https://develop-backend-lms-app-898785615088.us-central1.run.app/tenants/550e8400-e29b-41d4-a716-446655440000/tiers" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bronze",
    "minPoints": 0,
    "minReferrals": 0,
    "minEvents": 0,
    "rank": 1
  }'
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440002",
  "tenantId": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Bronze",
  "minPoints": 0,
  "minReferrals": 0,
  "minEvents": 0,
  "rank": 1
}
```

## Step 7: Create Your First Campaign

Campaigns are the core of the automated loyalty system. Let's create a simple signup bonus campaign.

```bash
curl -X POST "https://develop-backend-lms-app-898785615088.us-central1.run.app/tenants/550e8400-e29b-41d4-a716-446655440000/campaigns" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "tenantId": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Welcome Bonus",
    "description": "Get 100 points for signing up",
    "type": "achievement",
    "status": "active",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z",
    "rewardLimitPerMember": 1,
    "totalRewardLimit": 1000,
    "totalPointsLimit": 100000,
    "priority": 1,
    "conditionOperator": "AND"
  }'
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440003",
  "tenantId": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Welcome Bonus",
  "description": "Get 100 points for signing up",
  "type": "achievement",
  "status": "active",
  "startDate": "2024-01-01T00:00:00Z",
  "endDate": "2024-12-31T23:59:59Z",
  "rewardLimitPerMember": 1,
  "totalRewardLimit": 1000,
  "totalPointsLimit": 100000,
  "priority": 1,
  "conditionOperator": "AND",
  "campaignSteps": "campaign_creation"
}
```

## Complete Example in JavaScript

Here's a complete example using Node.js:

```javascript
const axios = require('axios');

const IDENTITY_SERVICE_URL = 'https://develop-backend-idp-app-898785615088.us-central1.run.app';
const LMS_SERVICE_URL = 'https://develop-backend-lms-app-898785615088.us-central1.run.app';

async function quickStart() {
  try {
    // Step 1: Create tenant
    const tenant = await axios.post(`${IDENTITY_SERVICE_URL}/v1/tenants`, {
      key: 'my-company-loyalty',
      name: 'My Company',
      email: 'admin@mycompany.com',
      password: 'secure-password-123',
      platformName: 'lms'
    });
    const tenantId = tenant.data.id;
    console.log('✅ Tenant created:', tenantId);

    // Step 2: Login to get JWT token
    const login = await axios.post(`${IDENTITY_SERVICE_URL}/v1/auth/login`, {
      email: 'admin@mycompany.com',
      password: 'secure-password-123'
    });
    const jwtToken = login.data.access_token;
    console.log('✅ JWT token obtained');

    // Step 3: Create member
    const member = await axios.post(`${LMS_SERVICE_URL}/tenants/${tenantId}/members`, {
      name: 'John Doe',
      email: 'john.doe@example.com',
      externalId: 'CUST_001',
      referralCode: 'JOHN123',
      joinDate: new Date().toISOString()
    }, {
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    });
    const memberId = member.data.id;
    console.log('✅ Member created:', memberId);

    // Step 4: Create tier
    const tier = await axios.post(`${LMS_SERVICE_URL}/tenants/${tenantId}/tiers`, {
      name: 'Bronze',
      minPoints: 0,
      minReferrals: 0,
      minEvents: 0,
      rank: 1
    }, {
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    });
    console.log('✅ Tier created:', tier.data.id);

    // Step 5: Create campaign
    const campaign = await axios.post(`${LMS_SERVICE_URL}/tenants/${tenantId}/campaigns`, {
      tenantId: tenantId,
      name: 'Welcome Bonus',
      description: 'Get 100 points for signing up',
      type: 'achievement',
      status: 'active',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      rewardLimitPerMember: 1,
      totalRewardLimit: 1000,
      totalPointsLimit: 100000,
      priority: 1,
      conditionOperator: 'AND'
    }, {
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    });
    console.log('✅ Campaign created:', campaign.data.id);

  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

quickStart();
```

## What's Next?

Congratulations! You've successfully:
- ✅ Created a tenant with admin credentials
- ✅ Set up default configurations and triggers
- ✅ Added a member
- ✅ Created a tier
- ✅ Set up a campaign

Now explore these next steps:

- **[API Reference (v1.0)](/docs/lms-v1-0/merit-lms-alpha-api)** - Explore all available endpoints
- **[API Reference (Alpha)](/docs/lms-valpha/merit-lms-alpha-api)** - Explore alpha version endpoints

## Common Next Steps

1. **Set up more campaigns** - Create campaigns for purchases, referrals, achievements
2. **Configure campaign conditions** - Set up eligibility criteria for your campaigns
3. **Add campaign effects** - Define what rewards to give when campaigns trigger
4. **Create segments** - Group members for targeted campaigns
5. **Set up vouchers** - Create promotional vouchers for members
6. **Implement analytics** - Track program performance and member engagement 