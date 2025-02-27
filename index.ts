import 'dotenv/config';
import server from './server';

const port = process.env.PORT || 3000;

server.listen(3000, () => {
  console.log(`[Server]: Server is running at port ${port}`);
});

