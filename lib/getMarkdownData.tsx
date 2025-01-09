import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownData(folder: string) {
  const folderPath = path.join(process.cwd(), folder);

  const files = fs.readdirSync(folderPath);
  const markdownData: any = {};

  files.forEach((file) => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(folderPath, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      const slug = path.basename(file, '.md');
      markdownData[slug] = { data, content };
    }
  });

  return markdownData;
}
