# Task: Text Summarizer

We are building a simple **Text Summarizer** application that leverages OpenAI APIs for summarizing user-provided content. The application should allow users to **create**, **update**, **delete**, and **list** summarized texts (CRUD functionality).

Below are the detailed requirements and expectations for this task:

---

## **Requirements**

### **1. Authentication**

- Implement a dummy authentication system:
  - Create a `User` table with fields for `username` and `password`.
  - Users should be able to sign up/sign in/sign out, and sessions should be validated using **cookies**.
  - Keep the authentication implementation simple.

### **2. Text Summarization Management**

- Use OpenAI APIs to summarize texts.
- Provide CRUD functionality for the summarized texts:
  - **Create**: Summarize a user-provided text using OpenAI API and save it in the database.
  - **Read**: List all saved summaries for the logged-in user.
  - **Update**: Allow users to update/edit a saved summary.
  - **Delete**: Allow users to delete a saved summary.

### **3. Tech Stack**

- Use the following technologies:
  - **Next.js 14** (App Router).
  - **Server actions** instead of internal API endpoints.
  - **Server components** for pages (client components can be used within server components where necessary).
  - **Typescript**.
  - **Supabase** for database (You can use the cloud one: supabase.com).
  - **Prisma** for ORM.
  - **OpenAI APIs** for content summarization.
  - **Tailwind CSS** for styling.
  - **Zustand** for state management.

### **4. Deployment**

- Host the project on **Vercel**.
- Use **GitHub** for source control:
  - Follow best practices for committing and branching.
  - Use clear commit messages and a feature-based branching strategy.

### **5. User Experience**

- Ensure the application has a **clean and user-friendly interface**.

---

## **Figma Resources**

- [Figma Design Link](https://www.figma.com/design/bxhRRD4AKJ4sSict9U4ULQ/%F0%9F%93%9D-%5BUD%5D-Text-Summarizer-Task?node-id=0-1&t=0eEsLqMCkj3IDQfH-1)
- [Figma Prototype Link](https://www.figma.com/proto/bxhRRD4AKJ4sSict9U4ULQ/%5BUD%5D-Text-Summarizer-Task?page-id=6%3A6094&node-id=6-6961&node-type=frame&viewport=-9055%2C2266%2C0.85&t=ryFRWLx2IXsU3nei-1&scaling=contain&content-scaling=fixed&starting-point-node-id=6%3A10705)
- [Video Overview for the Design](https://sharing.clickup.com/clip/p/t9012074603/5b9697d1-360b-49c0-b50c-9e7efe9ce511/screen-recording-2024-12-04-04%3A43.webm)

---

## **Submission Requirements**

- Include the link to your GitHub repository with the project.
- Ensure the project is deployed and accessible on Vercel. Provide the deployed URL.
- **Expected Deadline**: One week from the task assignment.

---

## **Evaluation Criteria**

Candidates will be evaluated based on the following criteria, with a total of 100 points:

| **Category**              | **Points** | **Details**                                                     |
| ------------------------- | ---------- | --------------------------------------------------------------- |
| **Authentication**        | 10         | Is the authentication system functional?                        |
| **Summarizer CRUD**       | 10         | Are the CRUD functionalities implemented correctly?             |
| **OpenAI Integration**    | 10         | Is the OpenAI API integration working seamlessly?               |
| **Database Setup**        | 10         | Is Supabase and Prisma set up correctly and used effectively?   |
| **State Management**      | 10         | Is Zustand implemented efficiently for state management?        |
| **Code Quality**          | 10         | Is the code modular, readable, and following best practices?    |
| **UI/UX Design**          | 10         | Is the user interface clean, and is the user experience smooth? |
| **Mobile Responsiveness** | 10         | Is the application fully responsive on mobile devices?          |
| **Git Workflow**          | 10         | Are best practices for commits and branching followed?          |
| **Deployment**            | 10         | Is the project successfully deployed and accessible on Vercel?  |

---

### Bonus Points

- (+5) Unit or integration tests for critical functionalities.
- (+5) Advanced UX features or animations using Tailwind.
- (+5) **SEO Optimization**: Ensure the application has good SEO practices.
- (+5) **Page Speed Optimization**: Score 90+ on [PageSpeed Insights](https://pagespeed.web.dev/).
- (+2 per day) Early submission bonus for each day ahead of the deadline.

---

Good luck! We look forward to reviewing your submission.
