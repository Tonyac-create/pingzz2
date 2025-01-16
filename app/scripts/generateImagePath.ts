import fs from "fs";
import path from "path";

export async function generateImagePath() {
  const directoryPath = path.join(process.cwd(), "public/Pictures_Pingzz");
  const files = fs.readdirSync(directoryPath);
  return files
    .filter((file) => file.match(/\.(png)$/))
    .map((file) => `/Pictures_Pingzz/${file}`);
}

export function shuffleArray<T>(array: T[]): T[] {
  const copiedArray = [...array];
  for (let i = copiedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
  }
  return copiedArray;
}

