import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'quick-start',
      label: 'Quick Start',
    },
    {
      type: 'doc',
      id: 'authentication',
      label: 'Authentication',
    },
  ],
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
  lmsV1_0Sidebar: [
    {
      type: 'doc',
      id: 'lms-v1-0/merit-lms-alpha-api',
    },
    {
      type: 'category',
      label: 'App',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/app-controller-get-hello',
          label: 'AppController_getHello',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tiers',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/tiers-controller-create',
          label: 'Create tier',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/tiers-controller-find-all',
          label: 'Get all tiers',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/tiers-controller-find-one',
          label: 'Get tier by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/tiers-controller-update',
          label: 'Update tier',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/tiers-controller-remove',
          label: 'Delete tier',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'Member Tiers',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/member-tiers-controller-assign-tier',
          label: 'Assign tier to member',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/member-tiers-controller-get-member-tier-history',
          label: 'Get member tier history',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Event Logs',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/event-logs-controller-save-event-log',
          label: 'Save an event log',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Members',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/members-controller-create',
          label: 'Create a new member',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/members-controller-find-all',
          label: 'Get all members',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/members-controller-find-one',
          label: 'Get member by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/members-controller-update',
          label: 'Update member',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/members-controller-soft-delete',
          label: 'Delete member',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/members-controller-find-referrals',
          label: 'Get member referrals',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/members-controller-validate-members',
          label: 'Validate member IDs',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/members-controller-get-member-stats',
          label: 'Get member statistics',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Points Parcels',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/points-parcels-controller-calculate-points-parcels',
          label: 'Burn points parcels',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/points-parcels-controller-redeem-points',
          label: 'Redeem points',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/points-parcels-controller-get-upcoming-points-expiry',
          label: 'Get upcoming points expiry',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Points Ledger',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/points-ledger-controller-get-all-ledgers',
          label: 'Get points ledger entries',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/points-ledger-controller-add-ledger-entry',
          label: 'Add points ledger entry',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/points-ledger-controller-handle-pub-sub-message',
          label: 'Handle pub/sub event',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/points-ledger-controller-get-combined-ledger-entries',
          label: 'Get combined ledger entries',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Trigger Logs',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/trigger-logs-controller-create-trigger-log',
          label: 'Create trigger log',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Triggers',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/triggers-controller-add-trigger',
          label: 'Create trigger',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/triggers-controller-get-triggers-by-type',
          label: 'Get triggers by type',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/triggers-controller-update-trigger',
          label: 'Update trigger',
          className: 'api-method put',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/triggers-controller-delete-trigger',
          label: 'Delete trigger',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/triggers-controller-add-default-trigger',
          label: 'Add default triggers',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Configs',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/configs-controller-update-settings',
          label: 'Update tenant settings',
          className: 'api-method put',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/configs-controller-fetch-settings',
          label: 'Get tenant settings',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/configs-controller-add-default-configs',
          label: 'Add default configs',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Campaign Engine',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-engine-controller-process-trigger',
          label: 'Process campaign trigger',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Campaign Triggers',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-triggers-controller-add-campaign',
          label: 'Create a new campaign trigger',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-triggers-controller-update-campaign-trigger',
          label: 'Update campaign trigger',
          className: 'api-method put',
        },
      ],
    },
    {
      type: 'category',
      label: 'Campaigns',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/campaigns-controller-create-campaign',
          label: 'Create a new campaign',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaigns-controller-campaign-stats',
          label: 'Get campaign statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaigns-controller-fetch-campaigns',
          label: 'Fetch all campaigns for the tenant',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaigns-controller-fetch-campaign-by-id',
          label: 'Get campaign by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaigns-controller-update-campaign',
          label: 'Update campaign',
          className: 'api-method put',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaigns-controller-delete-campaign',
          label: 'Delete campaign',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'Campaign Conditions',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-conditions-controller-add-campaign-condition',
          label: 'Create campaign conditions',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-conditions-controller-bulk-update-campaign-condition',
          label: 'Bulk update campaign conditions',
          className: 'api-method put',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-conditions-controller-update-campaign-condition',
          label: 'Update campaign condition',
          className: 'api-method put',
        },
      ],
    },
    {
      type: 'category',
      label: 'Campaign Effects',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-effects-controller-add-campaign-effect',
          label: 'Create campaign effects',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-effects-controller-bulk-update-campaign-effect',
          label: 'Bulk update campaign effects',
          className: 'api-method put',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-effects-controller-update-campaign-effect',
          label: 'Update campaign effect',
          className: 'api-method put',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/campaign-effects-controller-delete-campaign-effect',
          label: 'Delete campaign effect',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'Vouchers',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-create',
          label: 'Create voucher definition',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-find-all',
          label: 'Get all voucher definitions',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-find-one',
          label: 'Get voucher definition by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-update',
          label: 'Update voucher definition',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-remove',
          label: 'Delete voucher definition',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-find-all-vouchers',
          label: 'Get vouchers by definition',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-assign-voucher-to-a-member',
          label: 'Assign voucher to member',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-remove-voucher-assignments',
          label: 'Unassign voucher from member',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-delete-voucher',
          label: 'Delete voucher',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-upload-file',
          label: 'Upload voucher file',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/vouchers-controller-process-voucher-file',
          label: 'Process voucher file',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'VoucherRedeem',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/voucher-redeem-controller-redeem-voucher',
          label: 'VoucherRedeemController_redeemVoucher',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Segments',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-create',
          label: 'Create segment',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-find-all',
          label: 'Get all segments',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-find-one',
          label: 'Get segment by ID',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-update',
          label: 'Update segment',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-soft-delete',
          label: 'Soft delete segment',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-add-members-to-segment',
          label: 'Add members to segment',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-get-segment-members',
          label: 'Get segment members',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-remove-members-from-segment',
          label: 'Remove members from segment',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-get-available-members-for-segment',
          label: 'Get available members for segment',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-upload-file',
          label: 'Upload segment file',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/segments-controller-process-segment-file',
          label: 'Process segment file',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Analytics',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-graph-data',
          label: 'Get tenant graph data',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-tenant-stats',
          label: 'Get tenant statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-member-stats',
          label: 'Get member statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-member-points-graph',
          label: 'Get member points graph data',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-campaign-stats',
          label: 'Get campaign statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-campaign-engagement-stats',
          label: 'Get campaign engagement statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-campaign-triggers-graph',
          label: 'Get campaign triggers graph data',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-members-stats',
          label: 'Get members statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-member-segments-graph',
          label: 'Get members segments graph data',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-points-stats',
          label: 'Get points statistics',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-points-expiry-graph',
          label: 'Get points expiry graph data',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-campaign-tiers-graph',
          label: 'Get campaign tiers graph data',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'lms-v1-0/analytics-controller-get-members-tiers-graph',
          label: 'Get members tiers graph data',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Audit Logs',
      items: [
        {
          type: 'doc',
          id: 'lms-v1-0/audit-logs-controller-get-admin-logs',
          label: 'Get admin audit logs',
          className: 'api-method get',
        },
      ],
    },
  ],
};

export default sidebars;
