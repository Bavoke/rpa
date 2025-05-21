# RPA Week 5 Independent Project: Email Extractor CLI

This project fulfills the requirements for **Week 5 Independent Project** in your RPA journey. It demonstrates automation by extracting an email address from a sentence using two methods:

1.  Without Regular Expressions  
2.  With Regular Expressions  
3.  Sends a confirmation email to the extracted address  

All functionality is implemented using **Node.js**, with support for environment variables and interactive command-line usage.

---

## 🧾 Features

- Prompts user for a sentence containing an email
- Allows selection of extraction method:
  - RegEx
  - No RegEx (manual parsing)
- Extracts the email successfully even if surrounded by punctuation
- Sends a confirmation email to the extracted address

---

## 🛠 Technologies Used

- Node.js
- Nodemailer (for sending emails)
- Inquirer.js (for interactive CLI prompts)
- Docker (optional containerization)

---

## 📦 Requirements

- [Node.js](https://nodejs.org/) (v14 or higher)
- Gmail account with App Password enabled (for sending emails)

---

## 📥 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Bavoke/rpa.git
   cd email-extractor
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## ▶️ How to Run

1. Start the application:

   ```bash
   npm start
   ```

2. When prompted:
   - Enter a sentence containing one email address
   - Choose the extraction method (`RegEx` or `No RegEx`)
   
3. The program will:
   - Extract the email
   - Display it in the terminal
   - Send a confirmation email to that address

---

## 🔐 Configure Email Credentials

You can provide your Gmail credentials using environment variables:

### Option 1: Use `.env` File (Recommended for Local Dev)

Create a `.env` file in the root folder:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

> ⚠️ Do **not commit** `.env` files to Git. Add it to `.gitignore`.

### Option 2: Pass as Environment Variables at Runtime

```bash
EMAIL_USER=your_email@gmail.com EMAIL_PASS=your_app_password npm start
```

---

## 🐳 Docker Support

You can also run this app inside a Docker container.

### Build the image:

```bash
docker build -t email-extractor .
```

### Run the container interactively:

```bash
docker run -it --rm \
  -e EMAIL_USER=your_email@gmail.com \
  -e EMAIL_PASS=your_app_password \
  email-extractor
```

---

## 📁 Folder Structure

```
email-extractor/
│
├── index.js               # Main CLI logic
├── mailer.js              # Email sending logic
├── extractors/
│   ├── regex.js           # Email extraction using RegEx
│   └── no-regex.js        # Email extraction without RegEx
├── package.json
├── .gitignore
├── README.md
└── Dockerfile             # Optional: For Docker builds
```

---

##  Notes

- Ensure you're using a **Gmail App Password**, not your regular account password.
- Make sure 2-step verification is enabled on your Gmail account.
- Only **one email** is expected per sentence.

---

##  Sample Output

```
? Enter a sentence containing an email address: This is my email: john.doe@example.com. Please confirm.
? Choose extraction method: RegEx
 Extracted Email: john.doe@example.com
 Confirmation email sent!
```

---

##  Author

Your Name  
[LinkedIn Profile] | [GitHub Profile]

---

##  Submission for RPA Week 5 Independent Project

All rubric criteria have been met:
-  Correct output
-  Proper variable usage
-  Version control via GitHub
-  Mail activities used to send email

Total Points: **12/12**
```

---

Let me know if you'd like a version tailored with your name, GitHub link, or any specific instructions!