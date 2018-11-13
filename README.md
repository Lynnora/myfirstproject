# myfirstproject

# work flow

## Short version
- Pick up ticket
- Update master branch
- Create new branch
- Make changes
- Commit changes
- Create PR
- Get code reviewed
- Code gets approved and merged / make more changes - repeat until approved
- Switch back to master branch
- Pull in latest changes
- Move ticket to **IN TEST** a QA would make sure your code passes tests etc
- No issues - move to **DONE**

## Long version
- In Trello, pick up a ticket in the **TO DO** column and assign it to yourself (edit card > add member > select yourself)
- Move ticket to **IN PROGRESS**
- In the terminal make sure your master branch is up-to-date. `git pull` to make sure
- Create a new branch. Our naming convention is feature/XX-XXXX for a new feature or bugfix/XX-XXXX if you are fixing a bug.
- `git checkout -b feature/XX-XXXX` I have added a ticket id to the ticket subject in Trello e.g PF-wOXNWqAU
- You can now make your changes in this new branch without affecting the master branch.
- Once changes are complete, add your files to be committed
- `git add .` to add all changed files or `git add <file-name>` to add individual files
- create a commit with a message to outline what you have changed `git commit -m 'my awesome message'`
- push your changes to your repo `git push`
- In Github we will need to create a pull request (PR) to get your changes merged with the code in the master branch
- Click on the PR tab in github > hit the 'new pull request' button > click on the branch to merge from the list
- Hit the 'create pull request' on the next page
- Move your ticket to **IN REVIEW** and notify another developer to look at your code. That developer will either approve and merge your code into the master branch or request some changes to be made.
- If approved then you can go back to the terminal and checkout the master branch and pull in your changes
- If changes are to be made then make the changes in the same branch, add, commit, push, create PR and go through the same process until done.
