# IndyBMS Backend API

Made using Node.js, Express, GraphQL and MongoDB

## Purpose and Target Audience
IndyBMS is an event booking and discovery application targeted at local audiences that allow users to register for events in their neighborhood. The application contains the entire journey from event discovery to registration. Also, an organizer mode where locals can add events that would undergo a vetting process to verify their authenticity.

## Features Implemented
1. User Login / Register
2. Search for Events
3. Find Events from Category
4. View Event Details
5. Register For Event
6. Create Event
7. Edit Event
8. Admin Panel (for Manual Updating)

## Hosted Backend

[IndyBMS API - https://api.ryandsilva.dev](https://api.ryandsilva.dev/health)

[IndyBMS Admin - https://api.ryandsilva.dev/admin](https://api.ryandsilva.dev/admin)

#### Admin Credentials:

E: admin@indybms.com

P: 1234567890

## Pre-Requisites
1. Node.js 18 or above installed
2. Yarn package manager installed

## Setup
1. Install Dependencies
```sh
yarn
```
2. Copy contents of `.env.example` to `.env` and replace with correct values

### Run Local Server
```sh
yarn dev
```