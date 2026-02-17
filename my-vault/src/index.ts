import seedData from './data/seed.json';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  bootstrap({ strapi }: { strapi: any }) {
    // Seed data on startup - will update existing entries
    const seedContentTypes = async () => {
      const contentTypes = [
        { name: 'global', id: 1 },
        { name: 'homepage', id: 1 },
        { name: 'about-page', id: 1 },
        { name: 'services-page', id: 1 },
        { name: 'book-page', id: 1 },
        { name: 'contact-page', id: 1 },
      ];

      for (const ct of contentTypes) {
        try {
          const data = seedData[ct.name as keyof typeof seedData];
          if (!data) continue;

          // Try to update first, if fails, create
          try {
            await strapi.db.query(`api::${ct.name}.${ct.name}`).update({
              where: { id: ct.id },
              data: data
            });
            console.log(`✅ Updated ${ct.name} with numbered placeholders`);
          } catch {
            // If update fails, create new
            try {
              await strapi.db.query(`api::${ct.name}.${ct.name}`).create({
                data: { ...data, id: ct.id }
              });
              console.log(`✅ Created ${ct.name} with numbered placeholders`);
            } catch (createError) {
              console.log(`⏭️  ${ct.name} - entry may already exist`);
            }
          }
        } catch (error) {
          console.log(`❌ Error with ${ct.name}:`, error);
        }
      }
      console.log('🎉 All content seeded with numbered placeholders!');
      console.log('Now edit fields in Strapi - each field shows its number!');
    };

    // Run seeder
    seedContentTypes();
  },
};
