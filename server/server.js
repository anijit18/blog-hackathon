const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv  = require('dotenv');

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());


app.post('/', () => {
  res.send('working');
})

app.put('/', () => {
  res.send('working');
})
//helo
mongoose.connect(process.env.MONGO_URI,
     {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB Connected!!!'))
    .catch(err => console.log(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));