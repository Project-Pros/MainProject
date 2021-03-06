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
<br/>
<br/>How to run:
<br/>In the terminal run `npm run serve` from MainProject
<br/>How to generate jsdoc:
<br/>In the terminal run `jsdoc src -r -c jsdocConfig.json -d docs` from Main Project

## II. Files Included
------------------
### main-application(folder) which includes: 
* .idea(folder)
* dist(folder)
* docs(folder)
* main-application(folder)
* public(folder)
* src(folder)
* tests/units/pages(folder)
* MainProject.iml
* auth_config.json
* babel.config.js
* jest.config.js
* package-lock.json
* package.json, 
* README.md 
#### src(folder) includes: 
* auth(folder),
* components(folder),
* pages(folder),
* router(folder),
* App.vue---                     A vue starter file that will be used for the homepage of the application,
* main.js---                     A js file that will consist of the main code for the application.
#### auth(folder) includes:
* authGuard.js---                A js file that is used for adding in oauth for the login page,
* index.js---                    A js file that is used for adding in oauth for the login page.
#### components(folder) includes:
* AppNav.vue---                   A vue file that works with navigating between the different pages on the application,
* CalendarMonth.vue---            A vue file that contains the setup of the calendar used in the application,
* Card.vue---                     A vue file which contains starter code for a card to display on the homepage,
* DateIndicator.vue---            A vue file that holds what the date is,
* DateSelector.vue---             A vue file that lets user select a date on the calendar,
* MonthDay.vue---                 A vue file that contains the days within a month on the calendar,
* Weekdays.vue---                 A vue file that contains the days of the week on the calendar.
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
* Integrated Technologies (Calendar API, Kanban board, VueJS, Auth0)
## IV. Design
-----------
### Login Page
Once the application is started, the user will be greeted with a login page. This login page will display two options: Sign-In and Sign-Up. The Sign-In option is for those who have already created an account with the system. The Sing-Up option is available to those who do not already have an account for the application. They will be able to make an acount with this option. If the correct credentials are put in, then the user will be able to enter the homepage.
### Homepage (Tasks, Kanban Board, Priorities) 
The login page will lead to this page. The homepage is main page of this application. From here, the user will be able to start their project. 
* Tasks--- The user will be able to create tasks for their project. Many tasks can be created for the project. Each task contains a name, description, and a due date.
* Kanban Board--- These tasks can also be organized based on their level of completion. There is a To-Do section, a Work In Progress section, and a Completed section. Each task can be moved from one section to another based on where the user wants them. 
* Priorities--- Each task will also consist of priority markings. These priority markings represent how important the task is. This is to help the user decide which task needs to be completed first. The color red signifies that the task is very important and needs to be completed first. The color green signigies that the task is of low priority so it does not need to be completed urgently. 
### Calendar
The second main page of this application is the calendar. This page shows a calendar either with a monthly view or a weekly view. If a task has been assigned a due date, then the task will appear on the day that it is due. The user is able to switch between the monthly and weekly views and they are able to click on a task and view its description. This page is to allow the user to have a better picture of how soon they need to complete their tasks.

## V. Progress Analysis
----------------------
* Our member Reem worked on the creation of the login page. She was struggling with the functionality of the page. As a group, we plan to research how to add functionality to it and we also plan to research how to incorporate a database to hold the accounts.
* Our member CJ worked on the creation of the vue cards to be displayed on the homepage. Making the cards was part of one of our tech exercises, so we all should be able to make one. As a group, we plan to decorate the homepage more and add further functionality to the tasks.
* We put together a separate page for the calendar and the kanban board which will have the tasks on it. We also added in navigation between the two main pages of the application, the homepage and the calendar page.
* The kanban board has also been given functionality meaning that the user is able to switch where they would like to place their tasks based on the completion level. CJ and Reem worked together to make this possible.
* The README file has been organized, written, and updated by Nikita.
* Our member CJ worked on creating an account for Digital Ocean so that we can use a server for our login page.
* Our member Reem worked on creating and adding functionality to the calendar on the calendar page of our application.

## VI. Release Notes
-------------------
### Code Milstone 1
For the first Code Milestone due on June 24, 2021, we have a prototype of the login page. We are able to view the sign-in and sign-up tabs of this page. It is not functional yet. We have also started working on the homepage for the application. We worked make a card that can be displayed on the homepage as a task. This homepage is functional. We are able to add new tasks to the page with a title and description. In comparison to the predicted milestone in the project plan, we have completed a lot of the aspects we planned to. We have some starter code for our main classes. We are able to create the vue cards and we have a viewable login page. We are just short of the amount of functionality that we planned to have done by this date.
### Code Milestone 2
For the second Code Milestone due on July 15, 2021, we have added in new functions to our application. We have added in new pages onto the application. There is the login page, the kanban board page, and the calendar page. We have also added in navigation between these pages. This means that the user will be able to go back and forth on what pages they want to look at. This mostly applies for the kanban board page and the calendar page. Currently, we do not have the calendar created as that is part of code milestone 3. The kanban board now has functionality. The user is able to create tasks and then move the tasks around on the board based on completion. They are also able to delete tasks once they reach the done column. The login page is functional and works with Oauth0 service. The user can login and logout of the application. If they are logged in they can see the KanbanBoard and Calendar pages whereas if they are not only the login page will appear. Basic jest testing was also added to the project. 
### Code Milestone 3
For the third Code Milestone due on July 29, 2021, we added onto the functionality of our application. In order to make our application accessible to others on the internet, we had to deploy our application to a server. To do this, we created a Digital Ocean account for our application. We are incorporating Auth0 for the login page which runs on the URL and on localhost. We also added to the calendar page. Prior to this milestone, we just had a page for it, but now we have actually created a calendar to be displayed on the page. We also worked to add in functionality to the calendar. This includes navigating between months using the arrows in the upper right-hand corner. The date picker was added to the Kanban tasks to assist in adding tasks to the correct dates. The vue store was implemented so that we can pass the arrays of values between the pages. A database was also set up in Digital Ocean so that we can store a users tasks for each time they log in. In comparison to the predicted milestone in the project plan, we have completed what we wanted to. In the project plan, it just says to add in the calendar which has been done. The calendar page does need more enhancements and the database needs to be hooked to the project for Milestone 4.
### Code Milestone 4
For the fourth Code Milestone due on August 13, 2021, we worked a lot on getting the application to work with the database on Digital Ocean. There were also a few more fixes to the calendar to improve functionality. We also added in more generated tests for our project. For the previous milestone, we had our project running on Digital Ocean. For this milestone, our login page is still running on the URL and the localhost. We continued to work on the database in Digital Ocean to make it more efficient for the tasks to be stored for the users when they log into the application. The calendar still contains the vue store to pass the arrays of the values between the pages. Some more work was done on this but we were not able to fully integrate the tasks with the calendar as we had planned. In comparison to the predicted milestone in the project plan, we have completed most of what we needed to do. According to the project plan, it says to add in unit/integration tests as well as project documents and notes. The tests and the project documents have been completed. The notes part of the plan is incorporated in each task when they are created. Each tasks contains a description of what the user wants accomplished. If we were to continue working on this project we could improve upon the dashboard calls and continue working on integrating the tasks with the calendar so they show up on the right day. 
