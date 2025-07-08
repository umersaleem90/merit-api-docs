import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "lms-v1-0/merit-lms-alpha-api",
    },
    {
      type: "category",
      label: "App",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/app-controller-get-hello",
          label: "AppController_getHello",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tiers",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/tiers-controller-create",
          label: "Create tier",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/tiers-controller-find-all",
          label: "Get all tiers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/tiers-controller-find-one",
          label: "Get tier by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/tiers-controller-update",
          label: "Update tier",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "lms-v1-0/tiers-controller-remove",
          label: "Delete tier",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Member Tiers",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/member-tiers-controller-assign-tier",
          label: "Assign tier to member",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/member-tiers-controller-get-member-tier-history",
          label: "Get member tier history",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Event Logs",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/event-logs-controller-save-event-log",
          label: "Save an event log",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Members",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/members-controller-create",
          label: "Create a new member",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/members-controller-find-all",
          label: "Get all members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/members-controller-find-one",
          label: "Get member by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/members-controller-update",
          label: "Update member",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "lms-v1-0/members-controller-soft-delete",
          label: "Delete member",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "lms-v1-0/members-controller-find-referrals",
          label: "Get member referrals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/members-controller-validate-members",
          label: "Validate member IDs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/members-controller-get-member-stats",
          label: "Get member statistics",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Points Parcels",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/points-parcels-controller-calculate-points-parcels",
          label: "Burn points parcels",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/points-parcels-controller-redeem-points",
          label: "Redeem points",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/points-parcels-controller-get-upcoming-points-expiry",
          label: "Get upcoming points expiry",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Points Ledger",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/points-ledger-controller-get-all-ledgers",
          label: "Get points ledger entries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/points-ledger-controller-add-ledger-entry",
          label: "Add points ledger entry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/points-ledger-controller-handle-pub-sub-message",
          label: "Handle pub/sub event",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/points-ledger-controller-get-combined-ledger-entries",
          label: "Get combined ledger entries",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Trigger Logs",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/trigger-logs-controller-create-trigger-log",
          label: "Create trigger log",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Triggers",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/triggers-controller-add-trigger",
          label: "Create trigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/triggers-controller-get-triggers-by-type",
          label: "Get triggers by type",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/triggers-controller-update-trigger",
          label: "Update trigger",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "lms-v1-0/triggers-controller-delete-trigger",
          label: "Delete trigger",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "lms-v1-0/triggers-controller-add-default-trigger",
          label: "Add default triggers",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Configs",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/configs-controller-update-settings",
          label: "Update tenant settings",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "lms-v1-0/configs-controller-fetch-settings",
          label: "Get tenant settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/configs-controller-add-default-configs",
          label: "Add default configs",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Campaign Engine",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/campaign-engine-controller-process-trigger",
          label: "Process campaign trigger",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Campaign Triggers",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/campaign-triggers-controller-add-campaign",
          label: "Create a new campaign trigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaign-triggers-controller-update-campaign-trigger",
          label: "Update campaign trigger",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Campaigns",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/campaigns-controller-create-campaign",
          label: "Create a new campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaigns-controller-campaign-stats",
          label: "Get campaign statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaigns-controller-fetch-campaigns",
          label: "Fetch all campaigns for the tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaigns-controller-fetch-campaign-by-id",
          label: "Get campaign by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaigns-controller-update-campaign",
          label: "Update campaign",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaigns-controller-delete-campaign",
          label: "Delete campaign",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Campaign Conditions",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/campaign-conditions-controller-add-campaign-condition",
          label: "Create campaign conditions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaign-conditions-controller-bulk-update-campaign-condition",
          label: "Bulk update campaign conditions",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaign-conditions-controller-update-campaign-condition",
          label: "Update campaign condition",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Campaign Effects",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/campaign-effects-controller-add-campaign-effect",
          label: "Create campaign effects",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaign-effects-controller-bulk-update-campaign-effect",
          label: "Bulk update campaign effects",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaign-effects-controller-update-campaign-effect",
          label: "Update campaign effect",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "lms-v1-0/campaign-effects-controller-delete-campaign-effect",
          label: "Delete campaign effect",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Vouchers",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-create",
          label: "Create voucher definition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-find-all",
          label: "Get all voucher definitions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-find-one",
          label: "Get voucher definition by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-update",
          label: "Update voucher definition",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-remove",
          label: "Delete voucher definition",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-find-all-vouchers",
          label: "Get vouchers by definition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-assign-voucher-to-a-member",
          label: "Assign voucher to member",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-remove-voucher-assignments",
          label: "Unassign voucher from member",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-delete-voucher",
          label: "Delete voucher",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-upload-file",
          label: "Upload voucher file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/vouchers-controller-process-voucher-file",
          label: "Process voucher file",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "VoucherRedeem",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/voucher-redeem-controller-redeem-voucher",
          label: "VoucherRedeemController_redeemVoucher",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Segments",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-create",
          label: "Create segment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-find-all",
          label: "Get all segments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-find-one",
          label: "Get segment by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-update",
          label: "Update segment",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-soft-delete",
          label: "Soft delete segment",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-add-members-to-segment",
          label: "Add members to segment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-get-segment-members",
          label: "Get segment members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-remove-members-from-segment",
          label: "Remove members from segment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-get-available-members-for-segment",
          label: "Get available members for segment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-upload-file",
          label: "Upload segment file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "lms-v1-0/segments-controller-process-segment-file",
          label: "Process segment file",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Analytics",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-graph-data",
          label: "Get tenant graph data",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-tenant-stats",
          label: "Get tenant statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-member-stats",
          label: "Get member statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-member-points-graph",
          label: "Get member points graph data",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-campaign-stats",
          label: "Get campaign statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-campaign-engagement-stats",
          label: "Get campaign engagement statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-campaign-triggers-graph",
          label: "Get campaign triggers graph data",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-members-stats",
          label: "Get members statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-member-segments-graph",
          label: "Get members segments graph data",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-points-stats",
          label: "Get points statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-points-expiry-graph",
          label: "Get points expiry graph data",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-campaign-tiers-graph",
          label: "Get campaign tiers graph data",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lms-v1-0/analytics-controller-get-members-tiers-graph",
          label: "Get members tiers graph data",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Audit Logs",
      items: [
        {
          type: "doc",
          id: "lms-v1-0/audit-logs-controller-get-admin-logs",
          label: "Get admin audit logs",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
