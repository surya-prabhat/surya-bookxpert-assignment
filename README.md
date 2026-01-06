# Employee Management Portal

A modern, responsive Employee Management System that allows users to manage a digital directory of employees. The application features full CRUD functionality, real-time filtering, and a print-ready design.

## 🚀 Project Overview
This project was designed as a lightweight, performant dashboard to handle employee data. Key features include:
- **Employee Management:** Add, Edit, and Delete employee records.
- **Image Handling:** Profile photo uploads with Base64 persistence.
- **Advanced Filtering:** Multi-criteria search (Name, Gender, and Active Status).
- **Persistence:** Uses LocalStorage to save data across browser sessions.
- **Print Optimization:** Dedicated CSS for generating clean, scaled-down PDF reports.

## 🛠 Tech Stack
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **State Management:** React Context API (Search/Filter logic)
- **Language:** TypeScript

## ⚙️ Steps to Run Locally

1. **Extract the project:**

a. You can simply download the zip folder from the google drive link and extract it.

b. The node modules are already installed in the project so you can directely run the project using the dev command.
   ```bash
   npm run dev

  ```
2. **Clone the project:**

a. Copy the repository link from github(the repository is public)

  ```bash

    git clone https://github.com/surya-prabhat/surya-bookxpert-assignment.git

  ```

b. Navigate to the project

  ```bash

  cd filename-on-your-pc

  ```

c. Install the node modules

  ```bash

    npm install

  ```

d. Run the project 

  ```bash

    npm run dev

  ```

# 🧠Design Decisions & Assumptions

**Mobile-First Design:** Custom breakpoints (xxs: 250px, xs: 320px) were implemented to ensure the dashboard remains usable on extremely small mobile devices.

**LocalStorage:** For the scope of this project, I assumed a local-only data requirement. Data is stored as a JSON string in the browser's storage.

**Image Storage:** Images are converted to Base64 strings. Note: In a production environment, these would be uploaded to a cloud provider (S3/Cloudinary) and stored as URLs.

**Filtering Logic:** Filters are cumulative (Logical AND). Searching "John" while "Female" is selected will only show female employees named John.

**Print Layout:** I used @media print to hide navigation buttons and shrink card sizes to ensure a professional look for PDF exports.