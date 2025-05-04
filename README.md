# 🏠 Property Viewing Scheduler – Backend Challenge

Welcome to the technical challenge for the Backend Engineer role at Sakneen.

The goal is to evaluate not only your proficiency with **NestJS + Mongoose**, but also your ability to make thoughtful **design decisions**, identify **edge cases**, and handle **uncertainty** — just like in real-world software projects.

---

## 🚀 Task Overview

You're tasked with implementing a **property viewing reservation feature** for a real estate platform. Potential buyers or renters can request to view available properties, and each request must respect certain conditions and availability logic.

Your implementation should be modular, scalable, and written with maintainability and testability in mind.

---

## 🧱 Core Requirements

### Domain Concepts (minimum)

You will likely need to represent the following:

- **Property**  
  Contains essential information about a real estate listing.

- **Viewing**  
  Represents a scheduled viewing by a potential customer.

Other supporting entities or concepts may be needed — define and structure them as you see fit.

---

### Essential Functionalities

At a minimum, your solution should allow:

- [ ] Adding a new property (assume an "agent" owns it)
- [ ] Scheduling a viewing on a property
- [ ] Ensuring viewing times do not conflict for the same property
- [ ] Fetching available time slots for a property on a given day

How time and availability are handled is intentionally open-ended — please document your assumptions.

---

## 🎯 Testing

We’re interested in your testing habits and ability to structure logic cleanly.

### Unit Testing

- Cover critical business logic (e.g., conflict checking, booking conditions)
- Focus on meaningful coverage, not line count

> Suggested path: `src/<module>/__tests__/*.spec.ts`

### End-to-End Testing

- At least 2–3 test cases that validate full flow
- Use **NestJS TestingModule + Supertest**
- Prefer in-memory MongoDB (e.g., `mongodb-memory-server`)

> Suggested path: `test/*.e2e-spec.ts`

---

## 🎁 Bonus (Optional but Valued)

You may choose to implement any of the following enhancements:

- [ ] Authentication & role separation (e.g., user vs. agent)
- [ ] Handling agent unavailability (blocking out time ranges)
- [ ] Logging/auditing for scheduling operations
- [ ] Email confirmation mock (real or simulated)

Use these to showcase architectural thinking — don’t overbuild unless it adds clarity or value.

---

## 📦 Tech Stack

Your solution should use:

- [NestJS](https://docs.nestjs.com/)
- [Mongoose](https://mongoosejs.com/) + [MongoDB](https://www.mongodb.com/)
- TypeScript
- Jest (for unit + e2e testing)

---

## 🧠 Assumptions & Ambiguity

This spec does **not** cover all edge cases by design. You’re expected to:

- Make thoughtful assumptions
- Clearly document them in your README or code
- Handle uncertainty as you would in a real project

Example areas you may need to think through:
- Timezone and duration handling
- Slot granularity (15/30/60 minutes?)
- Booking window limits (e.g., max 30 days ahead?)
- User and agent modeling — are these persisted or mocked?

---

## 💾 Running the Project

```bash
# 1. Clone the repo

# 2. Install dependencies
npm install

# 3. Start the app
npm run start:dev
```
Set up MongoDB locally or use a cloud service. You may use .env for connection config.

-------


## 📬 Submission Guidelines
- Push to a **GitHub repo** (public or private with access)
- Include a brief write-up in `DECISIONS.md` or `README.md` that outlines:
    - Key decisions
    - Design trade-offs
    - Assumptions made

## 🧠 Evaluation Criteria

| Area          | What We’re Looking For                         |
| ------------- | ---------------------------------------------- |
| Code Quality  | Clean, modular, idiomatic NestJS/TypeScript    |
| Data Modeling | Practical, normalized schemas for MongoDB      |
| Logic Design  | Well-handled edge cases, testable services     |
| Testing       | Good coverage, thoughtful test scenarios       |
| API Design    | Clean REST structure with validation           |
| Communication | Clear documentation of choices and assumptions |
| Initiative    | How you go beyond the base requirements        |


