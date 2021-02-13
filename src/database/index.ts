import { connect } from 'mongoose';

import * as dotenv from 'dotenv';

dotenv.config()

export default connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
