const mongoose = require('mongoose');
const dotenv = require('dotenv');
const accountRepo = require('./src/repositories/account.repository');

dotenv.config({ path: '.env.dev' }); 

const runTest = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log('Connected to DB');
  console.log('Testing Create...');
  try {
    const newAccount = await accountRepo.create({
      firstName: 'John',
      lastName: 'Doe',
      email: `john.doe.${Date.now()}@example.com`, 
      password: 'secretPassword123'
    });
    console.log('Account Created:', newAccount.id);
    console.log('Password Hashed:', newAccount.password);
    console.log('Virtual FullName:', newAccount.fullName); 
    console.log('Testing Pagination...');
    const result = await accountRepo.findPaginated(1, 5);
    console.log(`Found ${result.data.length} accounts on page 1`);

  } catch (err) {
    console.error('Test Failed:', err.message);
  } finally {
    mongoose.connection.close();
  }
};

runTest();