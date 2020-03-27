[< Back to menu](../../README.md)

# Definition of Done

### User story
* All acceptance criteria passed
* Add all tickets to the **backlog**
* Assign their scores if it´s necessary

### Sprint
* Add **all** the tickets from the backlog to the current sprint (according to the effort)

### Develop
* Take a ticket from the **backlog**
* Pull the code from `develop`
* Create a new local branch **always** from `develop`
* In case that is there a bug in production, we should **always** pull the code from `master`
* All unit test passed
* Make a pull request and asign the reviewer.
* If the reviewer approve the code, we will delete the local branch and merge to `develop`
* All code checked in and validated
* Update the changelog

### Release
* All tasks completed
* All code checked in and validated
* Regression & functional testing completed and passed
* Merge to `master`
* Documentation updated

