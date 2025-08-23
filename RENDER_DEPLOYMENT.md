# 🚀 Render Deployment Guide - Frontend & Backend

## **Why Render for Both?**

- ✅ **Free tier available** - Both services on free plan
- ✅ **Easy deployment** - Simple GitHub integration
- ✅ **Automatic builds** - Deploy on every push
- ✅ **Custom domains** - Professional URLs
- ✅ **SSL certificates** - Free HTTPS

---

## **Step 1: Deploy Backend API**

### **1.1 Create Render Account**
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Verify your email address

### **1.2 Deploy Backend Service**
1. **Click "New +"** in your Render dashboard
2. **Select "Web Service"**
3. **Connect GitHub Repository:**
   - Choose your repo: `Adarsh-griffin/SkCleaning`
   - Render will auto-detect it

### **1.3 Configure Backend Settings**
```
Name: sk-cleaning-backend
Root Directory: backend
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
```

### **1.4 Environment Variables (Backend)**
Add these in Render dashboard:
```
NODE_ENV = production
PORT = 3000
FRONTEND_URL = https://your-frontend-url.onrender.com
```

### **1.5 Deploy Backend**
1. Click **"Create Web Service"**
2. Wait for build to complete (2-3 minutes)
3. **Copy your backend URL** (e.g., `https://sk-cleaning-backend.onrender.com`)

---

## **Step 2: Deploy Frontend**

### **2.1 Create Frontend Service**
1. **Click "New +"** again in Render dashboard
2. **Select "Static Site"** (not Web Service)
3. **Connect same GitHub Repository:**
   - Choose: `Adarsh-griffin/SkCleaning`

### **2.2 Configure Frontend Settings**
```
Name: sk-cleaning-frontend
Root Directory: (leave empty - use root)
Build Command: npm install && npm run build:client
Publish Directory: dist/spa
```

### **2.3 Environment Variables (Frontend)**
Add these in Render dashboard:
```
VITE_BACKEND_URL = https://your-backend-url.onrender.com
```

### **2.4 Deploy Frontend**
1. Click **"Create Static Site"**
2. Wait for build to complete (3-4 minutes)
3. **Copy your frontend URL** (e.g., `https://sk-cleaning-frontend.onrender.com`)

---

## **Step 3: Update Environment Variables**

### **3.1 Update Backend Environment**
1. Go to your backend service in Render
2. Click **"Environment"** tab
3. Update `FRONTEND_URL` with your frontend URL:
```
FRONTEND_URL = https://sk-cleaning-frontend.onrender.com
```

### **3.2 Update Frontend Environment**
1. Go to your frontend service in Render
2. Click **"Environment"** tab
3. Update `VITE_BACKEND_URL` with your backend URL:
```
VITE_BACKEND_URL = https://sk-cleaning-backend.onrender.com
```

### **3.3 Redeploy Services**
1. **Backend**: Click "Manual Deploy" → "Deploy latest commit"
2. **Frontend**: Click "Manual Deploy" → "Deploy latest commit"

---

## **Step 4: Test Your Deployment**

### **4.1 Test Backend API**
```bash
# Health check
curl https://sk-cleaning-backend.onrender.com/

# Should return:
{
  "message": "SK Cleaning Services API",
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z"
}

# Test leads API
curl https://sk-cleaning-backend.onrender.com/api/health
```

### **4.2 Test Frontend**
1. Visit your frontend URL
2. Open the chatbot
3. Complete a conversation
4. Check if lead is saved in backend

### **4.3 Test Lead Storage**
```bash
# Get all leads
curl https://sk-cleaning-backend.onrender.com/api/leads

# Should return:
{
  "success": true,
  "leads": [...],
  "count": 1
}
```

---

## **Step 5: Custom Domain Setup**

### **5.1 Add Custom Domain**
1. **Frontend Service:**
   - Go to "Settings" → "Custom Domains"
   - Add your domain (e.g., `skcleaning.com`)
   - Render will provide DNS instructions

2. **Backend Service:**
   - Go to "Settings" → "Custom Domains"
   - Add subdomain (e.g., `api.skcleaning.com`)

### **5.2 Update Environment Variables**
After adding custom domains, update:
```
# Frontend
VITE_BACKEND_URL = https://api.skcleaning.com

# Backend
FRONTEND_URL = https://skcleaning.com
```

---

## **Step 6: Monitor & Maintain**

### **6.1 Render Dashboard Features**
- **Logs**: View real-time application logs
- **Metrics**: Monitor performance and usage
- **Deployments**: Track deployment history
- **Environment**: Manage environment variables

### **6.2 Automatic Deployments**
- **Auto-deploy**: Every push to main branch
- **Preview deployments**: For pull requests
- **Rollback**: Easy rollback to previous versions

### **6.3 Health Checks**
- **Backend**: Automatic health monitoring
- **Frontend**: Static site serving
- **Uptime**: 99.9% uptime guarantee

---

## **Troubleshooting**

### **Common Issues**

#### **1. Build Failures**
```bash
# Check build logs in Render dashboard
# Common fixes:
- Verify Node.js version (18+)
- Check all dependencies in package.json
- Ensure build commands are correct
```

#### **2. Environment Variables**
```bash
# Verify environment variables are set
# Check spelling and values
# Redeploy after changing environment variables
```

#### **3. CORS Issues**
```bash
# Backend CORS is configured for:
- All origins in development
- Frontend URL in production
# Check FRONTEND_URL environment variable
```

#### **4. API Connection Issues**
```bash
# Test backend health:
curl https://your-backend-url.onrender.com/api/health

# Check frontend environment variable:
VITE_BACKEND_URL = https://your-backend-url.onrender.com
```

### **Support Resources**
- **Render Documentation**: [docs.render.com](https://docs.render.com)
- **Community Forum**: [community.render.com](https://community.render.com)
- **Status Page**: [status.render.com](https://status.render.com)

---

## **Cost & Limits**

### **Free Tier Limits**
- **Web Services**: 750 hours/month
- **Static Sites**: Unlimited
- **Bandwidth**: 100GB/month
- **Build Time**: 500 minutes/month

### **Upgrade Options**
- **Individual Plan**: $7/month per service
- **Team Plan**: $19/month for teams
- **Enterprise**: Custom pricing

---

## **Final Checklist**

### **Before Going Live**
- [ ] Backend deployed and healthy
- [ ] Frontend deployed and accessible
- [ ] Environment variables configured
- [ ] Custom domains set up (optional)
- [ ] SSL certificates active
- [ ] Chatbot tested and working
- [ ] Lead storage tested
- [ ] Performance optimized

### **Post-Deployment**
- [ ] Monitor logs for errors
- [ ] Test all chatbot flows
- [ ] Verify lead storage
- [ ] Check mobile responsiveness
- [ ] Test contact forms
- [ ] Monitor performance metrics

---

## **Quick Commands**

### **Local Testing**
```bash
# Test backend locally
cd backend
npm install
npm run dev

# Test frontend locally
npm install
npm run dev
```

### **Deployment URLs**
- **Frontend**: `https://sk-cleaning-frontend.onrender.com`
- **Backend**: `https://sk-cleaning-backend.onrender.com`
- **Repository**: `https://github.com/Adarsh-griffin/SkCleaning`

This setup gives you a complete, professional deployment on Render with both frontend and backend services! 🚀
