# Contributing rules

## Git

### Commit name

The commit name should be a summary of what you did. It should be accompanied by a description detailing what you did, any problems you encountered, and what remains to be done.

Each commit must have a name that starts with the following elements:

* `[FEAT]` For a new feature
* `[FILE]` For a new file or for an update of a file (not source code)
* `[CPNT]` For a new component
* `[UPDF]` For a feature update
* `[UPDC]` For a feature component
* `[FIX]`  For a bug fix
* `[WIP]` For Work in progress. Use it to make a save of your work, or if no flag above match with your commit
* `[DOC]` For new documentation file or update of the documentation
* `[CLEAN]` For refactoring or deleting unnecessary comments
* `[COMMENT]` For adding comment
* `[TEST]` For adding or update of unit tests


### Branch name

A branch must be created by functionality, component, issue.

If the branch to be created is linked to an issue, then the name of the branch must start with the issue id.

### CHANGLOG

When you have finished working, you must fill in the changelog with the current date. The changelog should list the main changes and anything else you think is relevant.

### Issues

When you create a new issue, please add the right labels.

* `Back-end`      If this is about the back-end
* `Front-end`     If this is about the front-end
* `Documentation` If this is about the documentation
* `Bugs`          If this is a bug or any trouble

## Code

At any time, if you need help you can read our [wiki](https://gricad-gitlab.univ-grenoble-alpes.fr/Projets-INFO4/19-20/8/app-pghm/-/wikis/home)

### Backend

#### API 

* If you add an new resource to the REST API, please create a new submodule with `$ python manage.py startapp <resource_name>`. You can use as sample the existing submodules.