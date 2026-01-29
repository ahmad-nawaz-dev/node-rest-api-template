# 🚀 Node.js REST API Template

> A production-ready, enterprise-grade Node.js REST API template with authentication, authorization, file uploads, email notifications, and real-time capabilities. Perfect for building scalable backend services.

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v5.2-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

---

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based Authentication** - Secure token-based authentication system
- **Role-Based Access Control (RBAC)** - Admin and User roles with granular permissions
- **Password Hashing** - Bcrypt encryption for secure password storage
- **CORS Enabled** - Cross-origin resource sharing configured
- **Input Validation** - Joi schema validation for all requests
- **Protected Routes** - Middleware-based route protection

### 👥 User Management
- **Complete CRUD Operations** - Create, Read, Update, Delete users
- **User Authentication** - Login with email and password
- **User Profiles** - Detailed user information management
- **Status Management** - Active/Inactive user status
- **Online Status Tracking** - Real-time user presence tracking
- **Last Seen Tracking** - Monitor user activity

### 🛠️ Service Management
- **Service CRUD** - Full service lifecycle management
- **Image Uploads** - Support for service images with file validation
- **Price Management** - Service pricing with validation
- **Service Status** - Active/Inactive service management
- **Service Descriptions** - Rich text descriptions

### 📧 Communication Features
- **Email Notifications** - Automated email sending with Nodemailer
- **Welcome Emails** - Customizable welcome email templates
- **Email Attachments** - Support for file attachments in emails
- **Template System** - Reusable email templates

### 🔄 Real-Time Capabilities
- **Socket.io Integration** - Ready for real-time features
- **WebSocket Support** - Real-time bidirectional communication
- **Connection Management** - Socket connection tracking

### 📁 File Management
- **File Upload System** - Secure file upload handling
- **Image Processing** - Image upload and storage
- **Organized Storage** - Categorized file storage structure
- **File Validation** - Upload validation and security

### 🗄️ Database
- **MongoDB Integration** - Mongoose ODM for database operations
- **Schema Validation** - Database-level validation
- **Timestamps** - Automatic createdAt and updatedAt tracking
- **Data Transformation** - Custom JSON transformation for responses
- **Relationship Management** - Reference-based relationships

### 🛡️ Code Quality
- **Modular Architecture** - Clean separation of concerns
- **Error Handling** - Comprehensive error handling
- **Request Validation** - Input validation on all endpoints
- **Response Formatting** - Consistent API response structure
- **Code Organization** - Well-structured folder hierarchy

---

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Authentication](#-authentication)
- [Data Models](#-data-models)
- [Usage Examples](#-usage-examples)
- [Technologies](#-technologies)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [Security Best Practices](#-security-best-practices)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd node-init-template

# Install dependencies
npm install

# Create .env file (see Configuration section)
cp .env.example .env

# Start the server
node index.js
```

The server will start on `http://localhost:3000` (or your configured port).

---

## 🛠️ Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd node-init-template
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required dependencies:
- Express.js framework
- MongoDB and Mongoose
- Authentication libraries (JWT, bcrypt)
- Validation library (Joi)
- File upload handling
- Email service (Nodemailer)
- And more...

### Step 3: Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
TEMPLATE_PORT=3000

# Database Configuration
# Local MongoDB
DB_URL=mongodb://localhost:27017/your-database-name

# MongoDB Atlas (Cloud)
# DB_URL=mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-min-32-characters
JWT_EXPIRES_IN=7d

# Email Configuration (Optional - for email features)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Environment
NODE_ENV=development
```

### Step 4: Start MongoDB

**Option A: Local MongoDB**
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
# or
brew services start mongodb-community
```

**Option B: MongoDB Atlas (Cloud)**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Add it to `.env` as `DB_URL`

### Step 5: Run the Application

```bash
# Development
node index.js

# Production (using forever)
npm run forever
```

You should see:
```
Successfully connected to database
Server running on port 3000
```

---

## 📁 Project Structure

```
node-init-template/
│
├── 📂 controllers/          # Business logic controllers
│   ├── 📂 services/        # Service-related controllers
│   │   ├── addService.js
│   │   ├── deleteService.js
│   │   ├── detailService.js
│   │   ├── servicesList.js
│   │   └── updateService.js
│   └── 📂 users/           # User-related controllers
│       ├── addUser.js
│       ├── deleteUser.js
│       ├── detailUser.js
│       ├── getUsers.js
│       ├── loginUser.js
│       └── updateUser.js
│
├── 📂 db/                  # Database configuration
│   └── mongoose.js         # MongoDB connection setup
│
├── 📂 middleware/          # Express middleware
│   └── authMiddleware.js   # JWT authentication middleware
│
├── 📂 models/              # Mongoose data models
│   ├── conversation.js    # Conversation model
│   ├── message.js         # Message model
│   ├── services.js        # Service model
│   └── users.js           # User model
│
├── 📂 routes/              # API route definitions
│   ├── main_routes.js     # Main route configuration
│   ├── service.js         # Service routes
│   └── user.js            # User routes
│
├── 📂 sockets/             # Socket.io configuration
│   └── events/            # Socket event handlers
│
├── 📂 templates/           # Email templates
│   └── welcome.js         # Welcome email template
│
├── 📂 uploads/             # Uploaded files storage
│   └── services/          # Service images
│
├── 📂 utils/               # Utility functions
│   ├── configureRoutes.js # Route configuration utility
│   ├── sendEmail.js       # Email sending utility
│   └── uploadFile.js      # File upload utility
│
├── 📂 validations/         # Request validation schemas
│   ├── messageValidator.js
│   ├── serviceValidator.js
│   └── userValidator.js
│
├── 📄 index.js             # Application entry point
├── 📄 package.json         # Project dependencies
└── 📄 README.md            # This file
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:3000
```

### Authentication
Most endpoints require authentication. Include the JWT token in the request header:
```
Authorization: <your-jwt-token>
```

---

### 👤 User Endpoints

#### 1. User Login
Authenticate a user and receive a JWT token.

**Endpoint:** `POST /users/login`

**Authentication:** Not required

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "user",
    "birthDate": "01-01-1990",
    "phone": "12345678901",
    "isOnline": false,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

---

#### 2. Create User
Create a new user account (Admin only).

**Endpoint:** `POST /users/add`

**Authentication:** Required (Admin role)

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "12345678901",
  "dob": "1990-01-01",
  "role": "user"
}
```

**Response (200 OK):**
```json
{
  "message": "User added successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "birthDate": "01-01-1990",
    "phone": "12345678901",
    "status": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:3000/users/add \
  -H "Content-Type: application/json" \
  -H "Authorization: <admin-jwt-token>" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "12345678901",
    "dob": "1990-01-01",
    "role": "user"
  }'
```

---

#### 3. Get All Users
Retrieve a list of all users (Admin only).

**Endpoint:** `GET /users/all`

**Authentication:** Required (Admin role)

**Query Parameters:**
- `page` (optional): Page number for pagination
- `limit` (optional): Number of items per page

**Response (200 OK):**
```json
{
  "users": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "birthDate": "01-01-1990",
      "phone": "12345678901",
      "status": true,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 1
}
```

---

#### 4. Get User Details
Get detailed information about a specific user (Admin only).

**Endpoint:** `GET /users/detail/:id`

**Authentication:** Required (Admin role)

**URL Parameters:**
- `id`: User ID

**Response (200 OK):**
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "birthDate": "01-01-1990",
    "phone": "12345678901",
    "status": true,
    "isOnline": false,
    "lastSeen": null,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

#### 5. Update User
Update user information (Admin only).

**Endpoint:** `PUT /users/update/:id`

**Authentication:** Required (Admin role)

**URL Parameters:**
- `id`: User ID

**Request Body:**
```json
{
  "name": "John Updated",
  "phone": "98765432109",
  "role": "admin"
}
```

**Response (200 OK):**
```json
{
  "message": "User updated successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Updated",
    "email": "john@example.com",
    "role": "admin",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

#### 6. Delete User
Delete a user account (User role can delete own account).

**Endpoint:** `DELETE /users/delete/:id`

**Authentication:** Required (User role)

**URL Parameters:**
- `id`: User ID

**Response (200 OK):**
```json
{
  "message": "User deleted successfully"
}
```

---

### 🛠️ Service Endpoints

#### 1. Create Service
Create a new service with optional image upload (Admin only).

**Endpoint:** `POST /service/add_service`

**Authentication:** Required (Admin role)

**Request Body (multipart/form-data):**
```
name: Web Development
description: Professional web development services
price: 1000
image: [file]
```

**Response (201 Created):**
```json
{
  "message": "Service Created Successfully",
  "service": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Web Development",
    "description": "Professional web development services",
    "price": 1000,
    "image": "uploads/services/1768992398124_image.jpeg",
    "isActive": true,
    "role": "user",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:3000/service/add_service \
  -H "Authorization: <admin-jwt-token>" \
  -F "name=Web Development" \
  -F "description=Professional web development services" \
  -F "price=1000" \
  -F "image=@/path/to/image.jpg"
```

---

#### 2. Get All Services
Retrieve a list of all services (Admin only).

**Endpoint:** `GET /service/service_list`

**Authentication:** Required (Admin role)

**Response (200 OK):**
```json
{
  "services": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Web Development",
      "description": "Professional web development services",
      "price": 1000,
      "image": "uploads/services/1768992398124_image.jpeg",
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 1
}
```

---

#### 3. Get Service Details
Get detailed information about a specific service (Admin only).

**Endpoint:** `GET /service/detail_service/:id`

**Authentication:** Required (Admin role)

**URL Parameters:**
- `id`: Service ID

**Response (200 OK):**
```json
{
  "service": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Web Development",
    "description": "Professional web development services",
    "price": 1000,
    "image": "uploads/services/1768992398124_image.jpeg",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

#### 4. Update Service
Update service information (Admin only).

**Endpoint:** `PUT /service/update_service/:id`

**Authentication:** Required (Admin role)

**URL Parameters:**
- `id`: Service ID

**Request Body:**
```json
{
  "name": "Advanced Web Development",
  "description": "Updated description",
  "price": 1500,
  "isActive": true
}
```

**Response (200 OK):**
```json
{
  "message": "Service updated successfully",
  "service": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Advanced Web Development",
    "price": 1500,
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

#### 5. Delete Service
Delete a service (Admin only).

**Endpoint:** `DELETE /service/delete_service/:id`

**Authentication:** Required (Admin role)

**URL Parameters:**
- `id`: Service ID

**Response (200 OK):**
```json
{
  "message": "Service deleted successfully"
}
```

---

### 🏥 Health Check

#### Server Status
Check if the server is running.

**Endpoint:** `GET /`

**Authentication:** Not required

**Response (200 OK):**
```
Server is working
```

---

## 🔐 Authentication

### How Authentication Works

1. **Login**: User provides email and password
2. **Token Generation**: Server validates credentials and generates JWT token
3. **Token Storage**: Client stores the token (localStorage, sessionStorage, etc.)
4. **Token Usage**: Client includes token in `Authorization` header for protected routes
5. **Token Validation**: Server validates token on each request

### Token Format

```
Authorization: <jwt-token>
```

### Token Expiration

Tokens expire based on `JWT_EXPIRES_IN` environment variable (default: 7 days).

### Role-Based Access

- **Admin**: Full access to all endpoints
- **User**: Limited access, can delete own account

---

## 📝 Data Models

### User Model

```javascript
{
  name: String,           // Required, 3-30 characters
  email: String,         // Required, unique, valid email
  password: String,       // Required, min 6 characters (hashed)
  phone: String,         // Optional, 11 characters
  birthDate: Date,       // Required, date format
  role: String,          // Enum: ["admin", "user"], default: "user"
  status: Boolean,       // Default: true (active)
  isOnline: Boolean,     // Default: false
  socketId: String,      // For Socket.io connections
  lastSeen: Date,        // Last activity timestamp
  createdAt: Date,       // Auto-generated
  updatedAt: Date         // Auto-generated
}
```

### Service Model

```javascript
{
  name: String,          // Required, trimmed
  description: String,   // Optional
  price: Number,        // Required, positive number
  image: String,         // Optional, file path
  isActive: Boolean,     // Default: true
  role: String,         // Enum: ["admin", "user"], default: "user"
  createdAt: Date,      // Auto-generated
  updatedAt: Date        // Auto-generated
}
```

### Conversation Model

```javascript
{
  members: [ObjectId],   // Array of user references
  isRoomJoined: Boolean, // Default: false
  lastMessage: ObjectId, // Reference to Message
  createdAt: Date,       // Auto-generated
  updatedAt: Date        // Auto-generated
}
```

### Message Model

```javascript
{
  conversationId: ObjectId, // Required, reference to Conversation
  senderId: ObjectId,       // Required, reference to User
  content: String,          // Required, message text
  createdAt: Date,          // Auto-generated
  updatedAt: Date           // Auto-generated
}
```

---

## 💻 Usage Examples

### Complete Authentication Flow

```javascript
// 1. Login
const loginResponse = await fetch('http://localhost:3000/users/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const { token, user } = await loginResponse.json();

// 2. Use token for authenticated requests
const userListResponse = await fetch('http://localhost:3000/users/all', {
  method: 'GET',
  headers: {
    'Authorization': token,
    'Content-Type': 'application/json'
  }
});

const users = await userListResponse.json();
```

### File Upload Example

```javascript
const formData = new FormData();
formData.append('name', 'Web Development');
formData.append('description', 'Professional services');
formData.append('price', '1000');
formData.append('image', fileInput.files[0]);

const response = await fetch('http://localhost:3000/service/add_service', {
  method: 'POST',
  headers: {
    'Authorization': token
  },
  body: formData
});
```

### Error Handling

```javascript
try {
  const response = await fetch('http://localhost:3000/users/add', {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Error:', error.message);
    return;
  }

  const data = await response.json();
  console.log('Success:', data);
} catch (error) {
  console.error('Network error:', error);
}
```

---

## 🔧 Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | v14+ | Runtime environment |
| **Express.js** | ^5.2.1 | Web framework |
| **MongoDB** | Latest | Database |
| **Mongoose** | ^9.1.1 | ODM for MongoDB |
| **JWT** | ^9.0.3 | Authentication |
| **bcrypt** | ^6.0.0 | Password hashing |
| **Joi** | ^18.0.2 | Input validation |
| **express-fileupload** | ^1.5.2 | File uploads |
| **Nodemailer** | ^7.0.12 | Email service |
| **Socket.io** | Latest | Real-time communication |
| **CORS** | ^2.8.6 | Cross-origin support |
| **dotenv** | ^17.2.3 | Environment variables |
| **moment** | ^2.30.1 | Date manipulation |

---

## 📜 Scripts

### Available NPM Scripts

```bash
# Run the server
node index.js

# Run with forever (production)
npm run forever

# Test (placeholder)
npm test
```

### Manual Commands

```bash
# Start MongoDB (Windows)
net start MongoDB

# Start MongoDB (macOS/Linux)
sudo systemctl start mongod

# Check MongoDB status
mongosh
```

---

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
TEMPLATE_PORT=3000
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=very-long-and-secure-secret-key-minimum-32-characters
JWT_EXPIRES_IN=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Deployment Options

**Option 1: Using PM2 (Recommended)**
```bash
npm install -g pm2
pm2 start index.js --name "api-server"
pm2 save
pm2 startup
```

**Option 2: Using Forever**
```bash
npm install -g forever
npm run forever
```

**Option 3: Docker (Coming Soon)**
```bash
docker build -t node-api .
docker run -p 3000:3000 node-api
```

**Option 4: Cloud Platforms**
- **Heroku**: `git push heroku main`
- **AWS Elastic Beanstalk**: Deploy via console
- **DigitalOcean App Platform**: Connect GitHub repo
- **Railway**: Connect and deploy
- **Render**: Connect repository

---

## 🔒 Security Best Practices

### ✅ Implemented

- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ Input validation with Joi
- ✅ CORS configuration
- ✅ Environment variables for secrets
- ✅ Role-based access control

### 🔄 Recommended for Production

- [ ] Rate limiting (use `express-rate-limit`)
- [ ] HTTPS/SSL certificates
- [ ] Helmet.js for security headers
- [ ] Request sanitization
- [ ] SQL injection prevention (N/A for MongoDB, but validate inputs)
- [ ] XSS protection
- [ ] Regular dependency updates
- [ ] Security audits (`npm audit`)
- [ ] API versioning
- [ ] Request logging and monitoring
- [ ] Error message sanitization

### Security Checklist

```bash
# Run security audit
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Database Connection Failed

**Error:** `DB connection failed`

**Solutions:**
- Check MongoDB is running: `mongosh` or check service status
- Verify `DB_URL` in `.env` file
- Check network connectivity for MongoDB Atlas
- Verify database credentials

#### 2. Port Already in Use

**Error:** `EADDRINUSE: address already in use`

**Solutions:**
```bash
# Find process using port
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # macOS/Linux

# Kill process or change port in .env
```

#### 3. JWT Token Invalid

**Error:** `Invalid token`

**Solutions:**
- Check token is included in `Authorization` header
- Verify token hasn't expired
- Ensure `JWT_SECRET` matches between token creation and validation
- Check token format: `Authorization: <token>` (no "Bearer" prefix)

#### 4. Validation Errors

**Error:** `Validation error: ...`

**Solutions:**
- Check request body matches schema requirements
- Verify required fields are provided
- Check data types match (string, number, date, etc.)
- Review validation schemas in `validations/` folder

#### 5. File Upload Issues

**Error:** File not uploading

**Solutions:**
- Check `uploads/` directory exists and has write permissions
- Verify `express-fileupload` middleware is configured
- Check file size limits
- Ensure `multipart/form-data` content type

#### 6. Email Not Sending

**Error:** Email service error

**Solutions:**
- Verify email credentials in `.env`
- For Gmail, use App Password (not regular password)
- Check SMTP settings
- Verify network connectivity
- Check email service logs

### Debug Mode

Enable detailed logging:

```javascript
// In index.js, add before routes
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style
- Add comments for complex logic
- Update documentation for new features
- Write clear commit messages
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Ahmad Nawaz**

- GitHub: [@ahmad-nawaz-dev](https://github.com/ahmad-nawaz-dev)
- Email: ahmadnawaz6300@gmail.com

---

## 🙏 Acknowledgments

- Express.js community
- MongoDB team
- All open-source contributors
- Everyone who uses and improves this template

---

## 📞 Support

Need help? Here are your options:

- 📧 **Email**: ahmadnawaz6300@gmail.com

---

## 🎯 Roadmap

Future enhancements planned:

- [ ] API documentation with Swagger/OpenAPI
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] API rate limiting
- [ ] Advanced error handling
- [ ] Logging system
- [ ] Caching layer (Redis)
- [ ] GraphQL support
- [ ] WebSocket chat implementation

---

**⭐ If you find this project useful, please give it a star!**

**Made with ❤️ for developers**
"# node-rest-api-template" 
