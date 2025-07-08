---
sidebar_position: 1
---

# Welcome to Merit LMS API

Merit LMS (Learning Management System) Alpha provides a comprehensive API for managing loyalty programs, points systems, member tiers, and gamification features. This API enables you to integrate powerful loyalty and engagement features into your applications.

## What is Merit LMS?

Merit LMS is a modern loyalty management platform that helps businesses:

- **Manage Member Loyalty Programs** - Track member points, tiers, and rewards
- **Automate Campaign Management** - Create and manage sophisticated marketing campaigns with triggers, conditions, and effects
- **Track Member Activity** - Monitor events, referrals, and engagement metrics
- **Distribute Vouchers** - Create and manage promotional vouchers and codes
- **Analyze Performance** - Get insights into member behavior and program effectiveness

## Key Features

### 🎯 **Member Management**
- Create and manage member profiles with comprehensive metadata
- Track member tiers and progression through tier assignments
- Handle referral systems and member relationships
- Manage member segments for targeted campaigns
- Validate member data and track member statistics

### 🏆 **Points System**
- Award points for various activities through campaigns
- Track points balance and transaction history via points ledger
- Manage points parcels with expiration dates
- Handle points redemption and burning
- Monitor upcoming points expiry

### ⚡ **Campaign Engine**
- **Campaigns**: Create sophisticated marketing campaigns with multiple types (purchase, internal, achievement, custom)
- **Campaign Triggers**: Define what events activate campaigns (purchase, burn, internal, achievement, custom)
- **Campaign Conditions**: Set flexible conditions using AND/OR logic for member eligibility
- **Campaign Effects**: Define what happens when campaigns are triggered (points, vouchers, etc.)
- **Campaign Processing**: Automatically process campaign rules when triggers occur

### 🎮 **Tier System**
- Create tier hierarchies with minimum requirements (points, referrals, events)
- Assign tiers to members with optional expiration dates
- Track tier history and progression
- Manage tier-based campaign targeting

### 🎫 **Voucher System**
- Generate promotional vouchers with various types (discount, percentage, free shipping)
- Assign vouchers to specific members
- Track voucher redemption and status
- Manage voucher expiration and limits
- Upload and process voucher files in bulk

### 📊 **Analytics & Reporting**
- **Tenant Analytics**: Comprehensive statistics for overall program performance
- **Member Analytics**: Individual member statistics and engagement metrics
- **Campaign Analytics**: Campaign performance, engagement, and trigger statistics
- **Points Analytics**: Points earning, redemption, and expiry trends
- **Segment Analytics**: Member distribution across segments and tiers
- **Real-time Graphs**: Time-series data for various metrics

### 🔧 **Configuration & Management**
- **Triggers**: Define system triggers that can activate campaigns
- **Configs**: Manage tenant-specific configuration settings
- **Event Logs**: Track and log all system events
- **Trigger Logs**: Monitor campaign trigger processing
- **Audit Logs**: Comprehensive audit trail for administrative actions

## API Overview

The Merit LMS API is RESTful and follows standard HTTP conventions:

- **Base URL**: `https://develop-backend-lms-app-898785615088.us-central1.run.app`
- **Authentication**: API Key-based authentication
- **Data Format**: JSON
- **Rate Limiting**: Applied per tenant
- **Versioning**: URL-based versioning (`/v1`)

## Module Details

### **Members Module**
The core module for managing customer profiles and relationships:
- **CRUD Operations**: Create, read, update, and soft delete members
- **Search & Filtering**: Find members by name, email, external ID, tiers, segments, and points ranges
- **Referral Tracking**: Manage referral relationships and track referral chains
- **Member Validation**: Validate member IDs in bulk operations
- **Statistics**: Get comprehensive member statistics and engagement metrics

### **Tiers Module**
Manages loyalty program tiers and member progression:
- **Tier Creation**: Define tiers with minimum points, referrals, and events requirements
- **Tier Assignment**: Assign tiers to members with optional expiration dates
- **Tier History**: Track member tier progression over time
- **Tier Management**: Update and delete tier definitions

### **Campaigns Module**
The heart of the automated loyalty system:
- **Campaign Types**: Support for purchase, internal, achievement, and custom campaigns
- **Campaign Lifecycle**: Manage campaigns from draft to active to inactive states
- **Campaign Steps**: Track campaign setup progress (creation → trigger → condition → effect → created)
- **Limits & Controls**: Set per-member and total campaign limits
- **Priority System**: Manage campaign execution priority
- **Date Ranges**: Define campaign start and end dates

### **Campaign Triggers Module**
Defines what events activate campaigns:
- **Trigger Types**: burn, purchase, internal, achievement, custom
- **Custom Attributes**: Define custom trigger attributes with metadata
- **Trigger Management**: Create, update, and delete trigger definitions
- **Default Triggers**: Add pre-configured triggers for common scenarios

### **Campaign Conditions Module**
Sets eligibility criteria for campaign participation:
- **Condition Types**: Member tier, segment, points balance, and custom conditions
- **Operators**: Support for equals, not equals, greater than, less than, etc.
- **Logical Operators**: Combine conditions with AND/OR logic
- **Bulk Operations**: Update multiple conditions simultaneously

### **Campaign Effects Module**
Defines what happens when campaigns are triggered:
- **Effect Types**: Points awards, voucher distribution, tier changes
- **Effect Management**: Create, update, and delete campaign effects
- **Bulk Operations**: Update multiple effects simultaneously

### **Points System Modules**
Comprehensive points management:
- **Points Ledger**: Track all points transactions with detailed history
- **Points Parcels**: Manage points with expiration dates and burning
- **Points Redemption**: Handle points redemption for rewards
- **Expiry Management**: Track and manage expiring points

### **Vouchers Module**
Complete voucher management system:
- **Voucher Definitions**: Create voucher templates with types, values, and limits
- **Voucher Generation**: Generate individual vouchers with unique codes
- **Voucher Assignment**: Assign vouchers to specific members
- **Voucher Redemption**: Process voucher redemptions
- **Bulk Operations**: Upload and process voucher files

### **Segments Module**
Member segmentation and targeting:
- **Segment Creation**: Create member segments for targeted campaigns
- **Member Management**: Add and remove members from segments
- **Bulk Operations**: Upload member lists via CSV files
- **Segment Analytics**: Track segment performance and member distribution

### **Analytics Module**
Comprehensive reporting and insights:
- **Tenant Statistics**: Overall program performance metrics
- **Member Analytics**: Individual member engagement and behavior
- **Campaign Performance**: Campaign effectiveness and engagement rates
- **Points Analytics**: Points earning, redemption, and expiry trends
- **Time-series Data**: Historical trends and patterns
- **Graph Data**: Visual data for dashboards and reporting

## Quick Start

1. **Get Your API Key** - Contact your administrator to get your API key
2. **Set Up Authentication** - Include your API key in request headers
3. **Create a Tenant** - Set up your organization's workspace
4. **Start Building** - Begin with member management and campaign creation

## What's Next?

- **[Authentication](./authentication)** - Learn how to authenticate your requests
- **[Quick Start Guide](./quick-start)** - Get up and running in minutes
- **[API Reference (v1.0)](/docs/lms-v1-0/merit-lms-alpha-api)** - Explore all available endpoints
- **[API Reference (Alpha)](/docs/lms-valpha/merit-lms-alpha-api)** - Explore alpha version endpoints

## Support

- **Documentation**: This site contains comprehensive guides and examples
- **API Reference**: Interactive API documentation with try-it-out functionality
- **Examples**: Code examples in multiple programming languages
- **Community**: Join our community for support and discussions

Ready to get started? Let's begin with [authentication](./authentication)!
