# DEPLOYMENT GUIDE

## Install Dependencies

npm install

---

## Run Backend

npm run dev

---

## Run Frontend

npm run dev

---

## Docker

docker-compose up --build

---

## Production

docker build -t uccis .

docker run -p 5000:5000 uccis

---

Environment Variables

PORT=5000

MONGO_URI=mongodb://mongo:27017/uccis

JWT_SECRET=uccis_secret

NODE_ENV=production
