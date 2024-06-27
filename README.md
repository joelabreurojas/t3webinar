<h1 align='center'>
    <img src='https://utfs.io/f/a6d4d414-e41e-462f-bf5f-bcb5fedf89df-2olo5d.png' alt='Project Logo' width='82'>
    <br>
    T3 Webinar
    <br>
    <br>
    <a href="https://github.com/j4breu/LazyMailsBot/blob/main/LICENSE">
    <img
        alt='License Logo'
        src='https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=302d41&colorB=ff8181'/>
    </a>
    <br>
</h1>

<p align='center'>
    <em>An invitiation to the Tech Talent Hub launch.</em>
</p>

&nbsp;

### ✨ Overview

The website's objectives are to collect the necessary information from participants, provide an intuitive send automatic confirmation emails and pre-event reminders, display sections related to the event with the students who contributed, provide AI guidance and interactive tutorials on the website's development.

&nbsp;

### 🔌 Installation

1. Clone the repository, `git clone https://github.com/j4breu/t3webinar`
2. Check your `node` version, we recommend `22.x` in order to avoid problems with dependencies.
3. Install the dependencies by running `pnpm install`

&nbsp;

### 💻 Usage

1. Make your own .env file.
```
POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NO_SSL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""

SMTP_SERVICE=""
SMTP_HOST=""
SMTP_PORT=""
SMTP_SECURE=""
SMTP_USER=""
SMTP_PASS=""
SMTP_FROM=""
```

2. Initialize the database using `pnpm db:push` and look at it with `pnpm db:studio`.
3. Run the server using `pnpm dev` and navigate to `http://localhost:300` in your browser.
4. Register a new user by completing the registration form and clicking on the "Send" button.
5. Send reminders by request `api/send/reminder`

&nbsp;

### 📝 Roadmap

- [x] Basic UI with mock data
- [x] Deploy to vercel
- [x] Responsive design
- [x] Set up a postgress database
- [x] Connect database to UI for registrations
- [x] Add email notifications support
- [ ] Implement a chatbot with flowise
- [ ] Make tests
- [x] Documentation

&nbsp;

### 👐 Contribute

> Improvements?

- Don't hesitate to create a PR.

> Problems?

- Feel free to open a new issue!

&nbsp;

### ❤️ Gratitude

Thanks to the following resources this project is possible:

- [The Modern React Tutorial](https://www.youtube.com/watch?v=d5x0JCZbAJs) - by Theo
