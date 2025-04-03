import multer from 'multer';

export const storage = multer.diskStorage({
    destination: 'public/documentation/',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage });