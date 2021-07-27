# MainProject
## Table of Contents
* [I. Introduction](#introduction)
* [II. Files Included](#files-included)
* [III. Technologies](#technologies)
* [IV. Design](#design)
* [V. Progress Analysis](#progress-analysis)
* [VI. Release Notes](#release-notes)
## I. Introduction
-------------------
This is the Project-Pros software application project with members Reem Aldhufairi, Dylan Bobbett, Nikita Estrada, and CJ Jurgens. While working on a big project, it is easy to get overwhelmed by the scope and how many elements are needed to complete final deliverable. We will develop a project management software that helps in organizing and managing projects. Our goal is to make a simplified Agile board that is focused on a singular project at a time. If a person is not familiar with Agile processes, they should still be able to use the tailored board with ease. For example, we would like it to be used for building a house, a software project, fixing a car, cleaning a house or other day to day projects that don’t necessarily require programming. 
## II. Files Included
------------------
### main-application(folder) which includes: 
* src(folder)
* tests/units/pages(folder)
* MainProject.iml
* babel.config.js
* package-lock.json
* package.json, 
README.md 
#### src(folder) includes: 
* auth(folder),
* components(folder),
* pages(folder),
* router(folder),
* App.vue---                     A vue starter file that will be used for the homepage of the application,
* main.js---                     A js file that will consist of the main code for the application.
#### auth(folder) includes:
* authGuard.js---
* index.js---
#### components(folder) includes:
* AppNav.vue---                   A vue file that works with navigating between the different pages on the application,
* CalendarMonth.vue---
* Card.vue---                     A vue file which contains starter code for a card to display on the homepage.
* DateIndicator.vue---
* DateSelector.vue---
* MonthDay.vue---
* Weekdays.vue---
#### pages(folder) includes:
* calendar.vue---               A vue starter file that will be used for the calendar page of the application,
* kanbanBoard.vue---            A vue file that will be used for the kanbanBoard page of the application,
* login.vue---                  A vue file that holds all the code from the previously created "loginprototype" folder and used for the login page,
* tasks.vue---                  A vue file that holds the code for the tasks that will display on the kanban board.
#### router(folder) includes:
* index.js---                   A js file that serves as a router for the application.                    
## III. Techologies
-------------------
* Java 8/11
* IDE (IntelliJ, Eclipse)
* Browser (Chrome, Firefox)
* Integrated Technologies (Calendar API, Kanban board, VueJS, Oauth)
## IV. Design
-----------
### Login Page
Once the application is started, the user will be greeted with a login page. This login page will display two options: Sign-In and Sign-Up. The Sign-In option is for those who have already created an account with the system. The Sing-Up option is available to those who do not already have an account for the application. They will be able to make an acount with this option. If the correct credentials are put in, then the user will be able to enter the homepage.
### Homepage (Tasks, Kanban Board, Priorities) 
The login page will lead to this page. The homepage is main page of this application. From here, the user will be able to start their project. 
* Tasks--- The user will be able to create tasks for their project. Many tasks can be created for the project. Each task contains a name, description, and a due date.
* Kanban Board--- These tasks can also be organized based on their level of completion. There is a To-Do section, a Work In Progress section, and a Completed section. Each task can be moved from one section to another based on where the user wants them. 
* Priorities--- Each task will also consist of priority markings. These priority markings represent how important the task is. This is to help the user decide which task needs to be completed first. The color red signifies that the task is very important and needs to be completed first. The color yellow means that the tasks isn't as criticial, but it needs to be completed next. The color green signigies that the task is of low priority so it does not need to be completed urgently. 
### Calendar
The second main page of this application is the calendar. This page shows a calendar either with a monthly view or a weekly view. If a task has been assigned a due date, then the task will appear on the day that it is due. The user is able to switch between the monthly and weekly views and they are able to click on a task and view its description. This page is to allow the user to have a better picture of how soon they need to complete their tasks.

## V. Progress Analysis
----------------------
* Our member Reem worked on the creation of the login page. She was struggling with the functionality of the page. As a group, we plan to research how to add functionality to it and we also plan to research how to incorporate a database to hold the accounts.
* Our member CJ worked on the creation of the vue cards to be displayed on the homepage. Making the cards was part of one of our tech exercises, so we all should be able to make one. As a group, we plan to decorate the homepage more and add further functionality to the tasks.
* We put together a separate page for the calendar and the kanban board which will have the tasks on it. We also added in navigation between the two main pages of the application, the homepage and the calendar page.
* The kanban board has also been given functionality meaning that the user is able to switch where they would like to place their tasks based on the completion level. CJ and Reem worked together to make this possible.
* The README file has been organized, written, and updated by Nikita.

## VI. Release Notes
-------------------
### Code Milstone 1
For the first Code Milestone due on June 24, 2021, we have a prototype of the login page. We are able to view the sign-in and sign-up tabs of this page. It is not functional yet. We have also started working on the homepage for the application. We worked make a card that can be displayed on the homepage as a task. This homepage is functional. We are able to add new tasks to the page with a title and description. In comparison to the predicted milestone in the project plan, we have completed a lot of the aspects we planned to. We have some starter code for our main classes. We are able to create the vue cards and we have a viewable login page. We are just short of the amount of functionality that we planned to have done by this date.
### Code Milestone 2
For the second Code Milestone due on July 15, 2021, we have added in new functions to our application. We have added in new pages onto the application. There is the login page, the kanban board page, and the calendar page. We have also added in navigation between these pages. This means that the user will be able to go back and forth on what pages they want to look at. This mostly applies for the kanban board page and the calendar page. Currently, we do not have the calendar created as that is part of code milestone 3. The kanban board now has functionality. The user is able to create tasks and then move the tasks around on the board based on completion. They are also able to delete tasks once they reach the done column. The login page is functional and works with Oauth0 service. The user can login and logout of the application. If they are logged in they can see the KanbanBoard and Calendar pages whereas if they are not only the login page will appear. Basic jest testing was also added to the project. 
