[< Back to menu](../../README.md)

These all tasks are automatized through [CLI program](../../cli/docs/app-cli.md)

**PLEASE don't do it manually**

# Release and Deploy

This is a step-by-step when starting a new ticket

```bash
git fetch
git checkout develop
git pull origin develop
```
    
Once you have up to date your branch develop, please run these commands

#### Type of branches

`bugfix` It´s a minnor bug (only in development)

`hotfix` It´s a bug (only in production)

`feature` An improvement (In development)


```bash
git checkout -b type/number_of_ticket-brief_description
```

For example

```bash
git checkout -b feature/2085-adding_a_new_input_in_main_form
```

*Do not never start coding on `master` or `develop`. Make it always creating a new branch*

#### Once you have finished the ticket

Firstly, run for getting the last version
```bash
git tag 
```

And then,

```bash
git add [files]
git commit -m "[type_of_branch/number_of_ticket]:brief_description"
git tag [x.y.z] -m "brief_description" 
```

_Do not make too many commits for one ticket, in this case please use `git rebase`_

And then

```bash
git push && git push --tags
```

Once the code is pushed, go to [github](github.com) and create a new pull request choosing a developer reviewer

The reviewer must approve or reject the merge. 

If it´s approved, then merge to `develop` and **delete the ticket´s branch**

**It´s always from remote! Never merge any branch locally** 

### How to define a new version?

This app uses [semantic version](http://semver.org/) `x.y.z` 

`x` defines a new version, it´s not compatible between the last one.

`y` defines a new `feature` of the current version.

`z` Defines a new `hotfix` or a `bugfix` from the current version or master


**PLEASE REMEMBER don't do it manually any of above tasks**