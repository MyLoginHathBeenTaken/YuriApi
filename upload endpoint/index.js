const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 6969;

// Configure Multer storage
const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage });

// Route to handle file upload
app.post('/upload', upload.single('image'), async (req, res) => {
  res.redirect('/suc');
});

// Configure static file serving
app.use(express.static(path.join(__dirname, 'root')));  // Set public folder for static content

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
