import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const submissionsFile = path.join(__dirname, 'submissions.json');

function saveSubmission(data: any) {
  let submissions: any[] = [];
  if (fs.existsSync(submissionsFile)) {
    try {
      submissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
    } catch {
      submissions = [];
    }
  }
  submissions.push({ ...data, timestamp: new Date().toISOString() });
  fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));
}

app.post('/api/contact', async (req, res) => {
  try {
    saveSubmission(req.body);
    await fetch('https://sheetdb.io/api/v1/r4af3gpdaf2ue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: req.body }),
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving submission', error);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
