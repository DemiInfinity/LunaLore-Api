# 🌌 **LunaLore API**

Welcome to the **LunaLore API**, the backbone of the LunaLore platform. This API is currently a **work in progress**, designed to power an interactive platform for VTubers to create and engage with character lore, story arcs, and audience interactions.

---

## 🚀 **Features**

### **Completed**
- Basic API structure.
- Hosting on Vercel with Supabase as the database.

### **In Progress / To-Do**
- **User Management**: Handle user registration, authentication, and account management.
- **Character Profiles**: Endpoints to create, update, and manage VTuber character profiles.
- **Lore Organization**: APIs for managing and organizing character lore and story arcs.
- **Audience Interaction**: Endpoints for tracking viewer suggestions and interactions.
- **AI Integration**: Serverless AI functionality for creative tools and dynamic content generation.

*(Note: These features are actively under development and subject to change.)*

---

## 🛠️ **Technologies Used**

- **Backend Framework**: Node.js
- **Database**: [Supabase](https://supabase.com/)
- **Hosting**: [Vercel](https://vercel.com/) for serverless deployments
- **Authentication**: Supabase Auth
- **API Design**: RESTful API structure

---

## 📚 **Setup Instructions**

### **Requirements**
- Node.js (version 16 or above)
- npm or yarn package manager
- Supabase account for database setup
- Vercel account for deployment

### **Steps**
1. Clone the repository:
   	```bash
   git clone https://github.com/DemiInfinity/lunalore-api.git
	```
2. Navigate to the project directory:
   	```bash
	cd lunalore-api
	```
3. Install dependencies:
	```bash
   npm install
	```
4. Set up environment variables:
- Create a .env file in the root directory.
- Add your Supabase keys and other environment variables:
   	```env
	SUPABASE_URL=your-supabase-url
	SUPABASE_KEY=your-supabase-key
	JWT_SECRET=your-jwt-secret

	```
5. Run the development server:
   	```bash
	npm run dev
	```
6. Access the API locally:
   	```bash
	http://localhost:3000
	```

### **Deploying to Vercel**

1. Push your project to a GitHub repository.

2. Connect the repository to Vercel:
   - Log in to [Vercel](https://vercel.com/).
   - Click **Import Project** and select your GitHub repository.

3. Set the environment variables:
   - Go to your project’s **Settings** in the Vercel dashboard.
   - Under the **Environment Variables** section, add:
     ```bash
     SUPABASE_URL=your-supabase-url
     SUPABASE_KEY=your-supabase-key
     JWT_SECRET=your-jwt-secret
     ```

4. Deploy the project:
   - Vercel will automatically build and deploy your project.
   - Once deployed, Vercel will provide a production URL, such as:
     ```
     https://your-project-name.vercel.app/
     ```

## 📖 **API Documentation**

### **Base URL**
	https://api.lunalore.app/
	

### **Planned Endpoints**

#### **User Authentication**
- **POST /auth/register**: Register a new user. *(To-Do)*
- **POST /auth/login**: Authenticate an existing user. *(To-Do)*

#### **Character Management**
- **GET /characters**: Retrieve all characters for the authenticated user. *(To-Do)*
- **POST /characters**: Create a new character. *(To-Do)*
- **PUT /characters/:id**: Update a character by ID. *(To-Do)*
- **DELETE /characters/:id**: Delete a character by ID. *(To-Do)*

#### **Lore Management**
- **GET /lore**: Retrieve all lore entries for a character. *(To-Do)*
- **POST /lore**: Create a new lore entry. *(To-Do)*
- **PUT /lore/:id**: Update a lore entry by ID. *(To-Do)*
- **DELETE /lore/:id**: Delete a lore entry by ID. *(To-Do)*

#### **AI Tools**
- **POST /ai/generate**: Generate story ideas or character dialogue. *(To-Do)*

*(Note: These endpoints are planned and not yet functional.)*

## 🎯 **Planned Features**

- **GraphQL Support**: Offer a GraphQL API for more flexible queries.
- **Webhook Integrations**: Allow VTubers to integrate with live-streaming platforms.
- **Expanded AI Tools**: Advanced AI features for story generation and character creation.
- **Rate Limiting**: Protect API usage with rate-limiting functionality.
- **User Analytics**: Provide insights into API usage and interactions.
- **Custom Notifications**: Enable VTubers to send updates or alerts to their viewers.
- **Collaboration Tools**: Shared character and lore management for teams.

## 🌟 **Contributing**

At this time, this project is not open to external collaboration. However, I welcome feedback and suggestions!  

Feel free to reach out if you have thoughts or ideas for future improvements.


## 🔗 **Related Projects**

- [LunaLore Main Website](https://lunalore.app/) (In Development)
- [Celestial Council Viewer Platform](https://council.lunalore.app/) (Planned)


## 📝 **License**

This project is licensed under the MIT License.
