const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, '../../public/blogs');
const manifestPath = path.join(blogsDir, 'blog-manifest.json');

try {
  const files = fs.readdirSync(blogsDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));
  
  fs.writeFileSync(manifestPath, JSON.stringify(mdFiles, null, 2));
  console.log('Blog manifest updated successfully!');
  console.log('Blog posts:', mdFiles.join(', '));
} catch (error) {
  console.error('Error updating blog manifest:', error);
}
