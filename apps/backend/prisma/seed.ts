/* eslint-disable */
import { PrismaClient, UserRole, AuthProvider } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const devPassword = 'changeme123';
  const hashedPassword = await bcrypt.hash(devPassword, 12);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      fullName: 'Admin User',
      role: UserRole.ADMIN,
      provider: AuthProvider.CREDENTIALS,
      isEmailVerified: true,
      mfaEnabled: false,
      isOnboarded: true,
    },
  });

  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      password: hashedPassword,
      fullName: 'Demo User',
      role: UserRole.USER,
      provider: AuthProvider.CREDENTIALS,
      isEmailVerified: true,
      mfaEnabled: false,
      isOnboarded: true,
    },
  });

  console.log('Seeding completed successfully!');
  console.log('Created users:');
  console.log('- Admin:', adminUser.email);
  console.log('- Demo:', demoUser.email);
  console.log(`\nAll seeded users use password: ${devPassword}`);
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
