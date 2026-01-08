import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const apiKey = process.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
  try {
    // We can't list models via SDK easily in all versions, so we'll use fetch directly
    // to ensure we see exactly what the API sees.
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.models) {
      const modelNames = data.models.map(m => m.name).join('\n');
      fs.writeFileSync('available_models.txt', modelNames);
      console.log('Models written to available_models.txt');
    } else {
      console.error('No models found or error:', data);
    }
  } catch (error) {
    console.error('Error listing models:', error);
  }
}

listModels();
