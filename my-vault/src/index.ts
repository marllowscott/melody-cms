// =============================================================================
// SEED SCRIPT PERMANENTLY REMOVED
// =============================================================================
// The previous seed script was causing content to reset on every Strapi restart
// because it was updating existing database entries with seed data.
//
// To prevent this issue from occurring again, the seed functionality has been
// completely removed from this file.
//
// If you need to seed data in the future, create a NEW separate script that:
// - Only CREATES new entries (never updates existing ones)
// - Has a mechanism to check if entries already exist before creating
// - Can be manually triggered (not on every startup)
//
// =============================================================================

export default {
  register({ strapi }) {},

  bootstrap({ strapi }) {
    console.log('✅ Bootstrap complete - no seed script running');
  },
};
