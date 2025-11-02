<h1>📌 Task Manager API (Node.js + Express + MongoDB)</h1>

<h2>A simple and powerful REST API for managing daily tasks — built using Express.js, MongoDB Atlas, and Mongoose.</h2>

<h3>📸 Project Screenshots</h3>
Result:-
<img width="491" height="347" alt="Screenshot 2025-11-02 145441" src="https://github.com/user-attachments/assets/016b3da2-2e54-4158-bf9a-b39d7187ab3e" />
<img width="1917" height="974" alt="Screenshot 2025-11-02 145427" src="https://github.com/user-attachments/assets/250f0973-c78b-4e71-9438-adccdedd09b4" />

🗂️ MongoDB Compass / Atlas Data View

✅ Features

✔ Add a new task
✔ View all tasks
✔ Get a task by ID
✔ Update task (mark completed/update details)
✔ Delete task<img width="1917" height="974" alt="Screenshot 2025-11-02 145427" src="https://github.com/user-attachments/assets/250f0973-c78b-4e71-9438-adccdedd09b4" />

✔ Cloud database connection using MongoDB Atlas

🛠 Tech Stack
Technology	Usage<img width="491" height="347" alt="Screenshot 2025-11-02 145441" src="https://github.com/user-attachments/assets/016b3da2-2e54-4158-bf9a-b39d7187ab3e" />

Node.js	Backend Runtime
Express.js	REST API Development
MongoDB Atlas	Cloud NoSQL Database
Mongoose	ORM for MongoDB
dotenv	Manage Environment Variables
📦 Installation & Setup
1️⃣ Clone this repository
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api

2️⃣ Install dependencies
npm install

3️⃣ Add MongoDB Connection

Create a .env file in root folder:

PORT=3000
MONGODB_URL=your_mongodb_atlas_url_here

4️⃣ Run the project
npm start


Server will run at 👇
➡ http://localhost:3000

🧪 API Endpoints
Method	Endpoint	Description
POST	/api/tasks	Create a new task
GET	/api/tasks	Retrieve all tasks
GET	/api/tasks/:id	Get task by ID
PATCH	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Remove task
✅ Example Request (POST)
{
  "title": "Submit MongoDB Task",
  "description": "Finish REST API Project",
  "dueDate": "2025-11-06",
  "completed": false
}


Response Example 🔽
✅ 201 Created

{
  "_id": "67072287018cf9cb56a395f1",
  "title": "Submit MongoDB Task",
  "description": "Finish REST API Project",
  "dueDate": "2025-11-06T00:00:00.000Z",
  "completed": false,
  "__v": 0
}

📌 Future Enhancements 🚀

✅ Add Authentication (JWT)
✅ Add Frontend (React / Next.js)
✅ Sorting & Filtering Tasks
✅ Task Categories + File Uploads

🙌 Author

👤 Devansh Upadhyay
📧 devansh@example.com
 (replace if needed)
💻 Full Stack Web Developer
