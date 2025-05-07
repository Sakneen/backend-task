# 🏠 Property Viewing Scheduler – Backend Challenge

Welcome to the technical challenge for the Backend Engineer role at Sakneen.

The goal is to evaluate not only your proficiency with **NestJS + Mongoose**, but also your ability to make thoughtful **design decisions**, identify **edge cases**, and handle **uncertainty** — just like in real-world software projects.

---

## 🚀 Task Overview

You're tasked with implementing a **property viewing reservation feature** for a real estate platform. Potential buyers or renters can request to view available properties, by reserving a slot to view the property, so each request must respect certain conditions and availability logic.

---

## 🧱 Core Requirements

### Domain Concepts (minimum)

You will likely need to represent the following:

- **Property Viewing**  
Represents a reserved scheduled viewing by a potential customer.

Other supporting entities or concepts may be needed — define and structure them as you see fit.
---

### Essential Functionalities

At a minimum, your solution should allow:

- [ ] Scheduling a viewing on a property
- [ ] Ensuring viewing times do not conflict for the same property
- [ ] Fetching available time slots for a property on a given day/week/month

---

## 🎁 Bonus (Optional but Valued)

You may choose to implement any of the following enhancements:

- [ ] Authentication & role separation (e.g., user vs. agent)
- [ ] Handling agent unavailability (blocking out time ranges)
- [ ] Email confirmation mock (real or simulated)
- [ ] Any thing needs fixing in the existing APIS ... ?

Use these to showcase architectural thinking — don’t overbuild unless it adds clarity or value.

---

## 📦 Tech Stack

Your solution should use:

- [NestJS](https://docs.nestjs.com/)
- [Mongoose](https://mongoosejs.com/) + [MongoDB](https://www.mongodb.com/)
- TypeScript
- Jest (for unit + e2e testing)

---

## 💾 Running the Project

```bash
# 1. Clone the repo

# 2. Install dependencies
npm install

# 3. Start the app
npm run start:dev
```
--- 

## Data

- There is a seed script that seeds the mongo memory server with some different properties
- It runs at application bootstrapping process

---

## 📬 Submission Guidelines
- Make a PR on the our Github repo with your adjustments as needed
- Try to follow a readable/reviewable structure for your PR
