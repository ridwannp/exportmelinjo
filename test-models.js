import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load .env manually since we are in a script
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error('Error: VITE_GEMINI_API_KEY not found in .env file');
  process.exit(1);
}

console.log('API Key found:', apiKey.substring(0, 5) + '...');

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
  try {
    // Note: listModels is not directly exposed on the helper but we can try to find a working model
    // by testing a few common ones.
    // Actually, for the SDK, we can't easily list models without using the model manager which might not be exported.
    // Let's just test the models we want to use.
    
    const modelsToTest = [
      'gemini-1.5-flash',
      'gemini-1.5-flash-latest',
      'gemini-1.5-pro',
      'gemini-1.5-pro-latest',
      'gemini-1.0-pro',
      'gemini-pro',
      'gemini-pro-vision'
    ];
    
    console.log('Testing models...');
    
    for (const modelName of modelsToTest) {
      process.stdout.write(`Testing ${modelName}... `);
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Hello');
        const response = await result.response;
        console.log('SUCCESS ✅');
      } catch (error) {
        if (error.message.includes('404')) {
          console.log('NOT FOUND ❌');
        } else {
          console.log(`ERROR: ${error.message} ⚠️`);
        }
      }
    }
    
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

listModels();
