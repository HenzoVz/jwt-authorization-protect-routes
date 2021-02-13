import express from 'express';

import Routers from './routers';

const app = express();

app.use(express.json());
app.use(Routers);

app.listen(3000, () => {
  console.log("🚀 Server started on port 3000!");
})
