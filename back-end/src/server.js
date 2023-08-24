import express from 'express';
import { initMongoDb } from '../configdb/db';
import { productRouter } from './routes/productRoute';
import { cartRouter } from './routes/userCartRoute';
import path from 'path'

const app = express();
app.use(express.json());

const pathAssets = path.join(__dirname, '/assets');
// pathAssets ~ /Users/manhhung/Documents/VueJS/Ecommerce/back-end/src/assets


app.use('/api/products', productRouter);
app.use('/api/users', cartRouter);
app.use('/images', express.static(pathAssets)); // pathAssets là 1 tệp tĩnh, nên ta sẽ sử dụng express.static

/* 
Ví dụ, nếu bạn có một hình ảnh có đường dẫn /images/logo.png, khi người dùng truy 
cập URL /images/logo.png, Express sẽ tự động tìm và phục vụ tệp logo.png từ thư mục pathAssets
*/
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})