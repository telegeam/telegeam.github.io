javascript
// 导入第三方库
import QRCode from 'qrcode';

// 创建Express应用程序
const express = require('express');
const app = express();

// 定义生成二维码的API接口
app.get('/qr/code', (req, res) => {
  const text = req.query.text; // 获取URL查询参数中的文本输入

  // 使用第三方库生成二维码
  QRCode.toDataURL(text, (err, url) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    
    // 返回生成的二维码图像URL
    res.send(`<img src="${url}" alt="QR Code">`);
  });
});