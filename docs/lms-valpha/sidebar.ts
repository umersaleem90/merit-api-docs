import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  lmsValphaSidebar: [
    {
      type: 'doc',
      id: 'lms-valpha/merit-lms-alpha-api',
    },
    {
      type: 'category',
      label: 'tenants',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-tenant',
          label: 'Create a new tenant',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/list-all-tenants',
          label: 'List all tenants.',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-a-tenant-by-id',
          label: 'Get a tenant by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/update-a-tenant-by-id',
          label: 'Update a tenant by ID',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-valpha/delete-a-tenant-by-id',
          label: 'Delete a tenant by ID',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'members',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-member',
          label: 'Create a new member',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/list-all-members-also-searches-by-email-name-or-external-id',
          label: 'List all members. Also searches by email, name or externalId',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-a-member-by-id',
          label: 'Get a member by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/update-a-member-by-id',
          label: 'Update a member by ID',
          className: 'api-method patch',
        },
      ],
    },
    {
      type: 'category',
      label: 'rules',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-rule',
          label: 'Create a new rule',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/list-all-rules-with-pagination',
          label: 'List all rules with pagination',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-a-rule-by-id',
          label: 'Get a rule by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/update-a-rule-by-id',
          label: 'Update a rule by ID',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-valpha/delete-a-rule-by-id',
          label: 'Delete a rule by ID',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-valpha/process-rules-for-an-event',
          label: 'Process rules for an event',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'events',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-event',
          label: 'Create a new event',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-all-events-for-a-tenant',
          label: 'Get all events for a tenant',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-a-specific-event',
          label: 'Get a specific event',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/update-an-event',
          label: 'Update an event',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-valpha/delete-an-event',
          label: 'Delete an event',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'tiers',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-tier',
          label: 'Create a new tier',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/list-all-tiers-also-list-tier-of-a-member-based-on-query-parameter',
          label:
            'List all tiers. Also list tier of a member based on query parameter',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/update-a-tier',
          label: 'Update a tier',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-valpha/delete-a-tier-by-id',
          label: 'Delete a tier by ID',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'points_ledger',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/retrieve-full-point-transaction-history-for-a-tenant',
          label: 'Retrieve full point transaction history for a tenant',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/add-a-new-point-entry-earn-burn-adjust',
          label: 'Add a new point entry (earn/burn/adjust)',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/retrieve-combined-ledger-entries-from-points-and-vouchers-ledgers',
          label:
            'Retrieve combined ledger entries from points and vouchers ledgers',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/consume-event-from-pub-sub',
          label: 'Consume event from pub/sub',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'audit-logs',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-audit-log-entry',
          label: 'Create a new audit log entry',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/list-all-audit-logs-also-lists-log-for-a-tenant-based-on-query-parameter',
          label:
            'List all audit logs. Also lists log for a tenant based on query parameter',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-a-specific-audit-log-entry',
          label: 'Get a specific audit log entry',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'event-logs',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-event-log-entry',
          label: 'Create a new event log entry',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/list-all-event-logs',
          label: 'List all event logs',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'segments',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/get-all-segments-for-a-tenant',
          label: 'Get all segments for a tenant',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-segment',
          label: 'Create a new segment',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-a-segment-by-id',
          label: 'Get a segment by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/update-a-segment',
          label: 'Update a segment',
          className: 'api-method put',
        },
        {
          type: 'doc',
          id: 'lms-valpha/delete-a-segment',
          label: 'Delete a segment',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-all-members-in-a-segment',
          label: 'Get all members in a segment',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/add-members-to-a-segment',
          label: 'Add members to a segment',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/remove-members-from-a-segment',
          label: 'Remove members from a segment',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'configs',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-config-entry',
          label: 'Create a new config entry',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-all-config-entries-for-a-tenant',
          label: 'Get all config entries for a tenant',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/update-a-config-entry',
          label: 'Update a config entry',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-a-single-config-entry',
          label: 'Get a single config entry',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/delete-a-config-entry',
          label: 'Delete a config entry',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'auth',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/admin-login',
          label: 'Admin login',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-tenant-info-from-token',
          label: 'Get tenant info from token',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'api_keys',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/fetch-all-api-keys-for-the-tenant',
          label: 'Fetch all API keys for the tenant',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-api-key-for-the-tenant',
          label: 'Create a new API key for the tenant',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/revoke-an-api-key',
          label: 'Revoke an API key',
          className: 'api-method patch',
        },
      ],
    },
    {
      type: 'category',
      label: 'points_parcels',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/redeem-points-from-a-members-account',
          label: "Redeem points from a member's account",
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-upcoming-points-expiry-for-a-tenant',
          label: 'Get upcoming points expiry for a tenant',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'roles',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/get-all-roles-for-the-tenant',
          label: 'Get all roles for the tenant',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'vouchers',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/get-all-voucher-definitions',
          label: 'Get all voucher definitions',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/create-a-new-voucher-definition',
          label: 'Create a new voucher definition',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-a-voucher-definition-by-id',
          label: 'Get a voucher definition by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/update-a-voucher-definition',
          label: 'Update a voucher definition',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-valpha/delete-a-voucher-definition',
          label: 'Delete a voucher definition',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-vouchers-for-a-definition',
          label: 'Get vouchers for a definition',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/delete-a-voucher',
          label: 'Delete a voucher',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-valpha/assign-vouchers-to-a-member',
          label: 'Assign vouchers to a member',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/unassign-vouchers-from-a-member',
          label: 'Unassign vouchers from a member',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'analytics',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/get-tenant-statistics',
          label: 'Get tenant statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-tenant-graph-data',
          label: 'Get tenant graph data',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-member-statistics',
          label: 'Get member statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-member-graph-data',
          label: 'Get member graph data',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Member Tiers',
      items: [
        {
          type: 'doc',
          id: 'lms-valpha/assign-a-tier-to-a-member',
          label: 'Assign a tier to a member',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-valpha/get-members-tier-history',
          label: "Get member's tier history",
          className: 'api-method get',
        },
      ],
    },
  ],
};

export default sidebar.lmsValphaSidebar;
