import React from "react";
import ReactDOM from "react-dom/client"; // تصحيح استيراد ReactDOM
import "./index.css"; // تصحيح المسار (استخدام النقطة بدلاً من الفاصلة)
import App from "./App";

// إنشاء الجذر (Root) للتطبيق
const root = ReactDOM.createRoot(document.getElementById("root"));

// تصيير (Render) التطبيق
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// اختياري: تشغيل reportWebVitals لتحليل الأداء
