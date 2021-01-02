# My most useful initial commands
[**MarkdownGuide**](https://guides.github.com/features/mastering-markdown/)

[**MarkdownPreview**](https://stackedit.io/app#)
#### Local handle
* ```git add .``` Add all of files remaining
* ```git status``` Check the status
* ```git tag -a <tag-name> -m 'Tag Message'``` Gives a tag name to the current version
* ```git commit -m 'Commit-Message resembling Tag-Message'``` Commit the current project
* ```git push origin master``` Share the current project to GitHub
* ```git log --pretty=oneline``` Lists all existing commits and its keylogs
* ```git checkout <tag-name>``` Checks out the last tags no commited

# Pro Git

**Scott Chacon, Ben Straub**
> Version 2.1.209, 2020 March 

---

- [Licence](#License)  
- [Preface by Scott Chacon](#Preface-by-Scott-Chacon)  
- [Preface by Ben Straub](#Preface-by-Ben-Straub)  
- [Dedications](#Dedications)  
- [Contributors](#Contributors)  
- [Introduction](#Introduction)  
- [Getting Started](#Getting-Started)  
   - [About Version Control](##About-Version-Control)  
   - [A Short History of Git](##A-Short-History-of-Git)  
   - [What is Git?](##What-is-Git?)  
   - [The Command Line](##The-Command-Line)  
   - [Installing Git](##Installing-Git)  
   - [First-Time Git Setup](##First-Time-Git-Setup)  
   - [Getting Help](##Getting-Help)  
   - [Summary](##Summary)  
- [Git Basics](#Git-Basics)  
   - [Getting a Git Repository](##Getting-a-Git-Repository)  
   - [Recording Changes to the Repository](##Recording-Changes-to-the-Repository)  
   - [Viewing the Commit History](##Viewing-the-Commit-History)  
   - [Undoing Things](##Undoing-Things)  
   - [Working with Remotes](##Working-with-Remotes)  
   - [Tagging](##Tagging)  
   - [Git Aliases](##Git-Aliases)
   - [Summary](##Summary)  
- [Git Branching](#Git-Branching)  
   - [Branches in a Nutshell](##Branches-in-a-Nutshell)  
   - [Basic Branching and Merging](##Basic-Branching-and-Merging)  
   - [Branch Management](##Branch-Management)  
   - [Branching Workflows](##Branching-Workflows)  
   - [Remote Branches](##Remote-Branches)  
   - [Rebasing](##Rebasing)  
   - [Summary](##Summary)  
- [Git on the Server](#Git-on-the-Server)  
   - [The Protocols](##The-Protocols)  
   - [Getting Git on a Server](##Getting-Git-on-a-Server)  
   - [Generating Your SSH Public Key](##Generating-Your-SSH-Public-Key)  
   - [Setting Up the Server](##Setting-Up-the-Server)  
   - [Git Daemon](##Git-Daemon)  
   - [Smart HTTP](##Smart-HTTP)  
   - [GitWeb](##GitWeb)  
   - [GitLab](##GitLab)  
   - [Third Party Hosted Options](##Third-Party-Hosted-Options)  
   - [Summary](##Summary)  
- [Distributed Git](#Distributed-Git)  
   - [Distributed Workflows](##Distributed-Workflows)  
   - [Contributing to a Project](##Contributing-to-a-Project)  
   - [Maintaining a Project](##Maintaining-a-Project)  
   - [Summary](##Summary)  
- [GitHub](#GitHub)  
   - [Account Setup and Configuration](##Account-Setup-and-Configuration)  
   - [Contributing to a Project](##Contributing-to-a-Project)  
   - [Maintaining a Project](##Maintaining-a-Project)  
   - [Managing an organization](##Managing-an-organization)  
   - [Scripting GitHub](##Scripting-GitHub)  
   - [Summary](##Summary)  
- [Git Tools](#Git-Tools)  
   - [Revision Selection](##Revision-Selection)  
   - [Interactive Staging](##Interactive-Staging)  
   - [Stashing and Cleaning](##Stashing-and-Cleaning)  
   - [Signing Your Work](##Signing-Your-Work)  
   - [Searching](##Searching)  
   - [Rewriting History](##Rewriting-History)  
   - [Reset Demystified](##Reset-Demystified)  
   - [Advanced Merging](##Advanced-Merging)  
   - [Rerere](##Rerere)  
   - [Debugging with Git](##Debugging-with-Git)  
   - [Submodules](##Submodules)  
   - [Bundling](##Bundling)  
   - [Replace](##Replace)  
   - [Credential Storage](##Credential-Storage)  
   - [Summary](##Summary)  
- [Customizing Git](#Customizing-Git)  
   - [Git Configuration](##Git-Configuration)  
   - [Git Attributes](##Git-Attributes)  
   - [Git Hooks](##Git-Hooks)  
   - [An Example Git-Enforced Policy](##An-Example-Git-Enforced-Policy)  
   - [Summary](##Summary)  
- [Git and Other Systems](#Git-and-Other-Systems)  
   - [Git as a Client](##Git-as-a-Client)  
   - [Migrating to Git](##Migrating-to-Git)  
   - [Summary](##Summary)  
- [Git Internals](#Git-Internals)  
   - [Plumbing and Porcelain](##Plumbing-and-Porcelain)  
   - [Git Objects](##Git-Objects)  
   - [Git References](##Git-References)  
   - [Packfiles](##Packfiles)  
   - [The Refspec](##The-Refspec)  
   - [Transfer Protocols](##Transfer-Protocols)  
   - [Maintenance and Data Recovery](##Maintenance-and-Data-Recovery)  
   - [Environment Variables](##Environment-Variables)  
   - [Summary](##Summary)  
- [Appendix A: Git in Other Environments](#Appendix-A:-Git-in-Other-Environments)  
   - [Graphical Interfaces](##Graphical-Interfaces)  
   - [Git in Visual Studio](##Git-in-Visual-Studio)  
   - [Git in Visual Studio Code](##Git-in-Visual-Studio-Code)  
   - [Git in Eclipse](##Git-in-Eclipse)  
   - [Git in IntelliJ / PyCharm / WebStorm / PhpStorm / RubyMine](##Git-in-IntelliJ-/-PyCharm-/-WebStorm-/-PhpStorm-/-RubyMine)  
   - [Git in Sublime Text](##Git-in-Sublime-Text)  
   - [Git in Bash](##Git-in-Bash)  
   - [Git in Zsh](##Git-in-Zsh)  
   - [Git in PowerShell](##Git-in-PowerShell)  
   - [Summary](##Summary)  
- [Appendix B: Embedding Git in your Applications](#Appendix-B:-Embedding-Git-in-your-Applications)  
   - [Command-line Git](##Command-line-Git)  
   - [Libgit2](##Libgit2)  
   - [JGit](##JGit)  
   - [go-git](##go-git)  
   - [Dulwich](##Dulwich)  
- [Appendix C: Git Commands](#Appendix-C:-Git-Commands)  
   - [Setup and Config](##Setup-and-Config)  
   - [Getting and Creating Projects](##Getting-and-Creating-Projects)  
   - [Basic Snapshotting](##Basic-Snapshotting)  
   - [Branching and Merging](##Branching-and-Merging)  
   - [Sharing and Updating Projects](##Sharing-and-Updating-Projects)  
   - [Inspection and Comparison](##Inspection-and-Comparison)  
   - [Debugging](##Debugging)  
   - [Patching](##Patching)  
   - [Email](##Email)  
   - [External Systems](##External-Systems)  
   - [Administration](##Administration)  
   - [Plumbing Commands](##Plumbing-Commands)  
- [Index](#Index)  

---

# Licence  

# Preface by Scott Chacon  

# Preface by Ben Straub  

# Dedications  

# Contributors
  
# Introduction
  
# Getting Started
  
   ##  About Version Control  
   ##  A Short History of Git  
   ##  What is Git?  
   ##  The Command Line  
   ##  Installing Git  
   ##  First-Time Git Setup  
   ##  Getting Help  
   ##  Summary  

# Git Basics
  
   ## Getting a Git Repository  
   ## Recording Changes to the Repository  
   ## Viewing the Commit History  
   ## Undoing Things  
   ## Working with Remotes  
   ## Tagging  
   ## Git Aliases  
   ## Summary  

# Git Branching
  
   ## Branches in a Nutshell  
   ## Basic Branching and Merging  
   ## Branch Management  
   ## Branching Workflows  
   ## Remote Branches  
   ## Rebasing  
   ## Summary  

# Git on the Server
  
   ## The Protocols  
   ## Getting Git on a Server  
   ## Generating Your SSH Public Key  
   ## Setting Up the Server  
   ## Git Daemon  
   ## Smart HTTP  
   ## GitWeb  
   ## GitLab  
   ## Third Party Hosted Options  
   ## Summary  

# Distributed Git
  
   ## Distributed Workflows  
   ## Contributing to a Project  
   ## Maintaining a Project  
   ## Summary  

# GitHub
  
   ## Account Setup and Configuration  
   ## Contributing to a Project  
   ## Maintaining a Project  
   ## Managing an organization  
   ## Scripting GitHub  
   ## Summary  

# Git Tools
  
   ## Revision Selection  
   ## Interactive Staging  
   ## Stashing and Cleaning  
   ## Signing Your Work  
   ## Searching  
   ## Rewriting History  
   ## Reset Demystified  
   ## Advanced Merging  
   ## Rerere  
   ## Debugging with Git  
   ## Submodules  
   ## Bundling  
   ## Replace  
   ## Credential Storage  
   ## Summary  

# Customizing Git
  
   ## Git Configuration  
   ## Git Attributes  
   ## Git Hooks  
   ## An Example Git-Enforced Policy  
   ## Summary  

# Git and Other Systems
  
   ## Git as a Client  
   ## Migrating to Git  
   ## Summary  

# Git Internals
  
   ## Plumbing and Porcelain  
   ## Git Objects  
   ## Git References  
   ## Packfiles  
   ## The Refspec  
   ## Transfer Protocols  
   ## Maintenance and Data Recovery  
   ## Environment Variables  
   ## Summary  

# Appendix A: Git in Other Environments
  
   ## Graphical Interfaces  
   ## Git in Visual Studio  
   ## Git in Visual Studio Code  
   ## Git in Eclipse  
   ## Git in IntelliJ / PyCharm / WebStorm / PhpStorm / RubyMine  
   ## Git in Sublime Text  
   ## Git in Bash  
   ## Git in Zsh  
   ## Git in PowerShell  
   ## Summary  

# Appendix B: Embedding Git in your Applications
  
   ## Command-line Git  
   ## Libgit2  
   ## JGit  
   ## go-git  
   ## Dulwich  

# Appendix C: Git Commands
  
   ## Setup and Config  
   ## Getting and Creating Projects  
   ## Basic Snapshotting  
   ## Branching and Merging  
   ## Sharing and Updating Projects  
   ## Inspection and Comparison  
   ## Debugging  
   ## Patching  
   ## Email  
   ## External Systems  
   ## Administration  
   ## Plumbing Commands  

# Index
  