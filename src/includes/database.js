import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log('Error connecting DB', err));