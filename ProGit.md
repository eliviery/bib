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

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.
Unported License. To view a copy of this license, [visit](https://creativecommons.org/licenses/by-nc-sa/3.0)
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

# Preface by Scott Chacon  

Welcome to the second edition of Pro Git. The first edition was published over four years ago now.
Since then a lot has changed and yet many important things have not. While most of the core
commands and concepts are still valid today as the Git core team is pretty fantastic at keeping
things backward compatible, there have been some significant additions and changes in the
community surrounding Git. The second edition of this book is meant to address those changes and
update the book so it can be more helpful to the new user.

When I wrote the first edition, Git was still a relatively difficult to use and barely adopted tool for
the harder core hacker. It was starting to gain steam in certain communities, but had not reached
anywhere near the ubiquity it has today. Since then, nearly every open source community has
adopted it. Git has made incredible progress on Windows, in the explosion of graphical user
interfaces to it for all platforms, in IDE support and in business use. The Pro Git of four years ago
knows about none of that. One of the main aims of this new edition is to touch on all of those new
frontiers in the Git community.

The Open Source community using Git has also exploded. When I originally sat down to write the
book nearly five years ago (it took me a while to get the first version out), I had just started working
at a very little known company developing a Git hosting website called GitHub. At the time of
publishing there were maybe a few thousand people using the site and just four of us working on it.
As I write this introduction, GitHub is announcing our 10 millionth hosted project, with nearly 5
million registered developer accounts and over 230 employees. Love it or hate it, GitHub has
heavily changed large swaths of the Open Source community in a way that was barely conceivable
when I sat down to write the first edition.

I wrote a small section in the original version of Pro Git about GitHub as an example of hosted Git
which I was never very comfortable with. I didn’t much like that I was writing what I felt was
essentially a community resource and also talking about my company in it. While I still don’t love
that conflict of interests, the importance of GitHub in the Git community is unavoidable. Instead of
an example of Git hosting, I have decided to turn that part of the book into more deeply describing
what GitHub is and how to effectively use it. If you are going to learn how to use Git then knowing
how to use GitHub will help you take part in a huge community, which is valuable no matter which
Git host you decide to use for your own code.

The other large change in the time since the last publishing has been the development and rise of
the HTTP protocol for Git network transactions. Most of the examples in the book have been
changed to HTTP from SSH because it’s so much simpler.

It’s been amazing to watch Git grow over the past few years from a relatively obscure version
control system to basically dominating commercial and open source version control. I’m happy that
Pro Git has done so well and has also been able to be one of the few technical books on the market
that is both quite successful and fully open source.

I hope you enjoy this updated edition of Pro Git.

# Preface by Ben Straub  

The first edition of this book is what got me hooked on Git. This was my introduction to a style of
making software that felt more natural than anything I had seen before. I had been a developer for
several years by then, but this was the right turn that sent me down a much more interesting path
than the one I was on.

Now, years later, I’m a contributor to a major Git implementation, I’ve worked for the largest Git
hosting company, and I’ve traveled the world teaching people about Git. When Scott asked if I’d be
interested in working on the second edition, I didn’t even have to think.

It’s been a great pleasure and privilege to work on this book. I hope it helps you as much as it did
me.

# Dedications  

_To my wife, Becky, without whom this adventure never would have begun. — Ben_

_This edition is dedicated to my girls. To my wife Jessica who has supported me for all of these years
and to my daughter Josephine, who will support me when I’m too old to know what’s going on. —
Scott_

# Contributors

Since this is an Open Source book, we have gotten several errata and content changes donated over
the years. Here are all the people who have contributed to the English version of Pro Git as an open
source project. Thank you everyone for helping make this a better book for everyone.

```
4wk- Johannes Schindelin Scott Bronson
Adam Laflamme John Lin Sean Head
Adrien Ollier Jon Forrest Sebastian Krause
Akrom K Jon Freed Severino Lorilla Jr
Aleh Suprunovich Jordan Hayashi Shengbin Meng
Alexander Bezzubov Joris Valette Shi Yan
Alexandre Garnier Josh Byster Siarhei Bobryk
Alfred Myers Joshua Webb Siarhei Krukau
Amanda Dillon Junjie Yuan Skyper
Andrei Dascalu Justin Clift Snehal Shekatkar
Andrew Layman Kaartic Sivaraam Song Li
Andrew MacFie KatDwo Stephan van Maris
Andrew Metcalf Katrin Leinweber Steven Roddis
Andrew Murphy Kausar Mehmood SudarsanGP
AndyGee Keith Hill Suhaib Mujahid
AnneTheAgile Kenneth Kin Lum Sven Selberg
Anthony Loiseau Klaus Frank Thanix
Anton Trunov Kristijan "Fremen" Velkovski Thomas Ackermann
Antonello Piemonte Krzysztof Szumny Thomas Hartmann
Antonino Ingargiola Kyrylo Yatsenko Tom Schady
Atul Varma Lars Vogel Tomoki Aonuma
Ben Sima Laxman Tvirus
Benjamin Dopplinger Lazar95 Tyler Cipriani
Borek Bernard Leonard Laszlo Ud Yzr
Brett Cannon Linus Heckemann UgmaDevelopment
Buzut Logan Hasson Vadim Markovtsev
C Nguyen Louise Corrigan Vangelis Katsikaros
Cadel Watson Luc Morin Victor Ma
Carlos Martín Nieto Lukas Röllin Vitaly Kuznetsov
Carlos Tafur Marcin Sędłak-Jakubowski William Gathoye
Chaitanya Gurrapu Marie-Helene Burle William Turrell
Changwoo Park Marius Žilėnas Wlodek Bzyl
Christoph Prokop Markus KARG Xavier Bonaventura
Christopher Wilson Marti Bolivar Yann Soubeyrand
CodingSpiderFox Mashrur Mia (Sa'ad) Yue Lin Ho
Cory Donnelly Masood Fallahpoor Yunhai Luo
Cullen Rhodes Mathieu Dubreuilh Yusuke SATO
Cyril Matthew Miner ajax
Damien Tournoud Matthieu Moy alex-koziell
Dan Schmidt Michael MacAskill allen joslin
Daniel Shahaf Michael Sheaver atalakam
Daniel Sturm Michael Welch axmbo
Daniele Tricoli Michiel van der Wulp bripmccann
Daniil Larionov Mike Charles brotherben
Danny Lin Mike Pennisi delta4d
David Rogers Mike Thibodeau devwebcl
Davide Angelocola Máximo Cuadros dualsky
Denis Savitskiy Niels Widger evanderiel
Dexter Nils Reuße eyherabh
Dexter Morganov Olleg Samoylov flip
DiamondeX Owen flyingzumwalt
Dieter Ziller Pablo Schläpfer goekboet
Dino Karic Pascal Berger grgbnc
Dmitri Tikhonov Pascal Borreli haripetrov
Dmitriy Smirnov Patrick Steinhardt i-give-up
Duncan Dean Pavel Janík iprok
Eden Hochbaum Paweł Krupiński jingsam
Eric Henziger Peter Kokot johnhar
Explorare Petr Janeček maks
Ezra Buehler Phil Mitchell mmikeww
Felix Nehrke Philippe Blain mosdalsvsocld
Filip Kucharczyk Philippe Miossec nicktime
Fornost461 Rafi patrick
Frank Raphael R paveljanik
Frederico Mazzone Ray Chen pedrorijo
Frej Drejhammar Rex Kerr peterwwillis
Guthrie McAfee Armstrong Reza Ahmadi petsuter
HairyFotr Richard Hoyle rahrah
Hamidreza Mahdavipanah Ricky Senft rmzelle
Haruo Nakayama Rintze M. Zelle root
Helmut K. C. Tessarek Rob Blanco sanders@oreilly.com
Hidde de Vries Robert P. Goldman spacewander
HonkingGoose Robert P. J. Day td
Howard Rohan D'Souza twekberg
Ignacy Roman Kosenko uerdogan
Ilker Cat Ronald Wampler un1versal
Jan Groenewald Rüdiger Herrmann xJom
Jaswinder Singh SATO Yusuke xtreak
Jean-Noël Avila Sam Ford yakirwin
Jeroen Oortwijn Sam Joseph zwPapEr
Jim Hill Sanders Kleinfeld ᐯᕮᒪᗝᑕᕮᒣ
Joel Davies Sarah Schneider 狄卢
Johannes Dewender Saurav Sachidanand
```

# Introduction

You’re about to spend several hours of your life reading about Git. Let’s take a minute to explain
what we have in store for you. Here is a quick summary of the ten chapters and three appendices of
this book.

In **Chapter 1** , we’re going to cover Version Control Systems (VCSs) and Git basics — no technical
stuff, just what Git is, why it came about in a land full of VCSs, what sets it apart, and why so many
people are using it. Then, we’ll explain how to download Git and set it up for the first time if you
don’t already have it on your system.

In **Chapter 2** , we will go over basic Git usage — how to use Git in the 80% of cases you’ll encounter
most often. After reading this chapter, you should be able to clone a repository, see what has
happened in the history of the project, modify files, and contribute changes. If the book
spontaneously combusts at this point, you should already be pretty useful wielding Git in the time it
takes you to go pick up another copy.

**Chapter 3** is about the branching model in Git, often described as Git’s killer feature. Here you’ll
learn what truly sets Git apart from the pack. When you’re done, you may feel the need to spend a
quiet moment pondering how you lived before Git branching was part of your life.

**Chapter 4** will cover Git on the server. This chapter is for those of you who want to set up Git inside
your organization or on your own personal server for collaboration. We will also explore various
hosted options if you prefer to let someone else handle that for you.

**Chapter 5** will go over in full detail various distributed workflows and how to accomplish them
with Git. When you are done with this chapter, you should be able to work expertly with multiple
remote repositories, use Git over email and deftly juggle numerous remote branches and
contributed patches.

**Chapter 6** covers the GitHub hosting service and tooling in depth. We cover signing up for and
managing an account, creating and using Git repositories, common workflows to contribute to
projects and to accept contributions to yours, GitHub’s programmatic interface and lots of little tips
to make your life easier in general.

**Chapter 7** is about advanced Git commands. Here you will learn about topics like mastering the
scary _reset_ command, using binary search to identify bugs, editing history, revision selection in
detail, and a lot more. This chapter will round out your knowledge of Git so that you are truly a
master.

**Chapter 8** is about configuring your custom Git environment. This includes setting up hook scripts
to enforce or encourage customized policies and using environment configuration settings so you
can work the way you want to. We will also cover building your own set of scripts to enforce a
custom committing policy.

**Chapter 9** deals with Git and other VCSs. This includes using Git in a Subversion (SVN) world and
converting projects from other VCSs to Git. A lot of organizations still use SVN and are not about to
change, but by this point you’ll have learned the incredible power of Git — and this chapter shows
you how to cope if you still have to use a SVN server. We also cover how to import projects from
several different systems in case you do convince everyone to make the plunge.

**Chapter 10** delves into the murky yet beautiful depths of Git internals. Now that you know all
about Git and can wield it with power and grace, you can move on to discuss how Git stores its
objects, what the object model is, details of packfiles, server protocols, and more. Throughout the
book, we will refer to sections of this chapter in case you feel like diving deep at that point; but if
you are like us and want to dive into the technical details, you may want to read Chapter 10 first.
We leave that up to you.

In **Appendix A** , we look at a number of examples of using Git in various specific environments. We
cover a number of different GUIs and IDE programming environments that you may want to use
Git in and what is available for you. If you’re interested in an overview of using Git in your shell,
your IDE, or your text editor, take a look here.

In **Appendix B** , we explore scripting and extending Git through tools like libgit2 and JGit. If you’re
interested in writing complex and fast custom tools and need low-level Git access, this is where you
can see what that landscape looks like.

Finally, in **Appendix C** , we go through all the major Git commands one at a time and review where
in the book we covered them and what we did with them. If you want to know where in the book
we used any specific Git command you can look that up here.

Let’s get started.

# Getting Started

This chapter will be about getting started with Git. We will begin by explaining some background
on version control tools, then move on to how to get Git running on your system and finally how to
get it set up to start working with. At the end of this chapter you should understand why Git is
around, why you should use it and you should be all set up to do so.

##  About Version Control

What is “version control”, and why should you care? Version control is a system that records
changes to a file or set of files over time so that you can recall specific versions later. For the
examples in this book, you will use software source code as the files being version controlled,
though in reality you can do this with nearly any type of file on a computer.

If you are a graphic or web designer and want to keep every version of an image or layout (which
you would most certainly want to), a Version Control System (VCS) is a very wise thing to use. It
allows you to revert selected files back to a previous state, revert the entire project back to a
previous state, compare changes over time, see who last modified something that might be causing
a problem, who introduced an issue and when, and more. Using a VCS also generally means that if
you screw things up or lose files, you can easily recover. In addition, you get all this for very little
overhead.

**Local Version Control Systems**

Many people’s version-control method of choice is to copy files into another directory (perhaps a
time-stamped directory, if they’re clever). This approach is very common because it is so simple, but
it is also incredibly error prone. It is easy to forget which directory you’re in and accidentally write
to the wrong file or copy over files you don’t mean to.

To deal with this issue, programmers long ago developed local VCSs that had a simple database that
kept all the changes to files under revision control.


_Figure 1. Local version control._

One of the most popular VCS tools was a system called RCS, which is still distributed with many
computers today. RCS works by keeping patch sets (that is, the differences between files) in a special
format on disk; it can then re-create what any file looked like at any point in time by adding up all
the patches.

**Centralized Version Control Systems**

The next major issue that people encounter is that they need to collaborate with developers on
other systems. To deal with this problem, Centralized Version Control Systems (CVCSs) were
developed. These systems (such as CVS, Subversion, and Perforce) have a single server that contains
all the versioned files, and a number of clients that check out files from that central place. For
many years, this has been the standard for version control.

_Figure 2. Centralized version control._

This setup offers many advantages, especially over local VCSs. For example, everyone knows to a
certain degree what everyone else on the project is doing. Administrators have fine-grained control
over who can do what, and it’s far easier to administer a CVCS than it is to deal with local databases
on every client.

However, this setup also has some serious downsides. The most obvious is the single point of failure
that the centralized server represents. If that server goes down for an hour, then during that hour
nobody can collaborate at all or save versioned changes to anything they’re working on. If the hard
disk the central database is on becomes corrupted, and proper backups haven’t been kept, you lose
absolutely everything — the entire history of the project except whatever single snapshots people
happen to have on their local machines. Local VCS systems suffer from this same
problem — whenever you have the entire history of the project in a single place, you risk losing
everything.

**Distributed Version Control Systems**

This is where Distributed Version Control Systems (DVCSs) step in. In a DVCS (such as Git, Mercurial,
Bazaar or Darcs), clients don’t just check out the latest snapshot of the files; rather, they fully
mirror the repository, including its full history. Thus, if any server dies, and these systems were
collaborating via that server, any of the client repositories can be copied back up to the server to
restore it. Every clone is really a full backup of all the data.

_Figure 3. Distributed version control._

Furthermore, many of these systems deal pretty well with having several remote repositories they
can work with, so you can collaborate with different groups of people in different ways
simultaneously within the same project. This allows you to set up several types of workflows that
aren’t possible in centralized systems, such as hierarchical models.

##  A Short History of Git

As with many great things in life, Git began with a bit of creative destruction and fiery controversy.

The Linux kernel is an open source software project of fairly large scope. For most of the lifetime of
the Linux kernel maintenance (1991–2002), changes to the software were passed around as patches
and archived files. In 2002, the Linux kernel project began using a proprietary DVCS called
BitKeeper.

In 2005, the relationship between the community that developed the Linux kernel and the
commercial company that developed BitKeeper broke down, and the tool’s free-of-charge status
was revoked. This prompted the Linux development community (and in particular Linus Torvalds,
the creator of Linux) to develop their own tool based on some of the lessons they learned while
using BitKeeper. Some of the goals of the new system were as follows:

- Speed
- Simple design
- Strong support for non-linear development (thousands of parallel branches)
- Fully distributed
- Able to handle large projects like the Linux kernel efficiently (speed and data size)

Since its birth in 2005, Git has evolved and matured to be easy to use and yet retain these initial
qualities. It’s amazingly fast, it’s very efficient with large projects, and it has an incredible
branching system for non-linear development (See Git Branching).

##  What is Git?

So, what is Git in a nutshell? This is an important section to absorb, because if you understand what
Git is and the fundamentals of how it works, then using Git effectively will probably be much easier
for you. As you learn Git, try to clear your mind of the things you may know about other VCSs, such
as CVS, Subversion or Perforce — doing so will help you avoid subtle confusion when using the tool.
Even though Git’s user interface is fairly similar to these other VCSs, Git stores and thinks about
information in a very different way, and understanding these differences will help you avoid
becoming confused while using it.

**Snapshots, Not Differences**

The major difference between Git and any other VCS (Subversion and friends included) is the way
Git thinks about its data. Conceptually, most other systems store information as a list of file-based
changes. These other systems (CVS, Subversion, Perforce, Bazaar, and so on) think of the
information they store as a set of files and the changes made to each file over time (this is
commonly described as _delta-based_ version control).


_Figure 4. Storing data as changes to a base version of each file._

Git doesn’t think of or store its data this way. Instead, Git thinks of its data more like a series of
snapshots of a miniature filesystem. With Git, every time you commit, or save the state of your
project, Git basically takes a picture of what all your files look like at that moment and stores a
reference to that snapshot. To be efficient, if files have not changed, Git doesn’t store the file again,
just a link to the previous identical file it has already stored. Git thinks about its data more like a
**stream of snapshots**.

_Figure 5. Storing data as snapshots of the project over time._

This is an important distinction between Git and nearly all other VCSs. It makes Git reconsider
almost every aspect of version control that most other systems copied from the previous
generation. This makes Git more like a mini filesystem with some incredibly powerful tools built on
top of it, rather than simply a VCS. We’ll explore some of the benefits you gain by thinking of your
data this way when we cover Git branching in Git Branching.

**Nearly Every Operation Is Local**

Most operations in Git need only local files and resources to operate — generally no information is
needed from another computer on your network. If you’re used to a CVCS where most operations
have that network latency overhead, this aspect of Git will make you think that the gods of speed
have blessed Git with unworldly powers. Because you have the entire history of the project right
there on your local disk, most operations seem almost instantaneous.


For example, to browse the history of the project, Git doesn’t need to go out to the server to get the
history and display it for you — it simply reads it directly from your local database. This means you
see the project history almost instantly. If you want to see the changes introduced between the
current version of a file and the file a month ago, Git can look up the file a month ago and do a local
difference calculation, instead of having to either ask a remote server to do it or pull an older
version of the file from the remote server to do it locally.

This also means that there is very little you can’t do if you’re offline or off VPN. If you get on an
airplane or a train and want to do a little work, you can commit happily (to your _local_ copy,
remember?) until you get to a network connection to upload. If you go home and can’t get your VPN
client working properly, you can still work. In many other systems, doing so is either impossible or
painful. In Perforce, for example, you can’t do much when you aren’t connected to the server; in
Subversion and CVS, you can edit files, but you can’t commit changes to your database (because
your database is offline). This may not seem like a huge deal, but you may be surprised what a big
difference it can make.

**Git Has Integrity**

Everything in Git is checksummed before it is stored and is then referred to by that checksum. This
means it’s impossible to change the contents of any file or directory without Git knowing about it.
This functionality is built into Git at the lowest levels and is integral to its philosophy. You can’t lose
information in transit or get file corruption without Git being able to detect it.

The mechanism that Git uses for this checksumming is called a SHA-1 hash. This is a 40-character
string composed of hexadecimal characters (0–9 and a–f ) and calculated based on the contents of a
file or directory structure in Git. A SHA-1 hash looks something like this:

```
24b9da6552252987aa493b52f8696cd6d3b00373
```
You will see these hash values all over the place in Git because it uses them so much. In fact, Git
stores everything in its database not by file name but by the hash value of its contents.

**Git Generally Only Adds Data**

When you do actions in Git, nearly all of them only _add_ data to the Git database. It is hard to get the
system to do anything that is not undoable or to make it erase data in any way. As with any VCS, you
can lose or mess up changes you haven’t committed yet, but after you commit a snapshot into Git, it
is very difficult to lose, especially if you regularly push your database to another repository.

This makes using Git a joy because we know we can experiment without the danger of severely
screwing things up. For a more in-depth look at how Git stores its data and how you can recover
data that seems lost, see Undoing Things.

**The Three States**

Pay attention now — here is the main thing to remember about Git if you want the rest of your
learning process to go smoothly. Git has three main states that your files can reside in: _modified_,
_staged_ , and _committed_ :


- Modified means that you have changed the file but have not committed it to your database yet.
- Staged means that you have marked a modified file in its current version to go into your next commit snapshot.
- Committed means that the data is safely stored in your local database.

This leads us to the three main sections of a Git project: the working tree, the staging area, and the
Git directory.

_Figure 6. Working tree, staging area, and Git directory._

The working tree is a single checkout of one version of the project. These files are pulled out of the
compressed database in the Git directory and placed on disk for you to use or modify.

The staging area is a file, generally contained in your Git directory, that stores information about
what will go into your next commit. Its technical name in Git parlance is the “index”, but the phrase
“staging area” works just as well.

The Git directory is where Git stores the metadata and object database for your project. This is the
most important part of Git, and it is what is copied when you _clone_ a repository from another
computer.

The basic Git workflow goes something like this:

1. You modify files in your working tree.
2. You selectively stage just those changes you want to be part of your next commit, which adds _only_ those changes to the staging area.
3. You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

If a particular version of a file is in the Git directory, it’s considered _committed_. If it has been

modified and was added to the staging area, it is _staged_. And if it was changed since it was checked
out but has not been staged, it is _modified_. In Git Basics, you’ll learn more about these states and
how you can either take advantage of them or skip the staged part entirely.

##  The Command Line

There are a lot of different ways to use Git. There are the original command-line tools, and there
are many graphical user interfaces of varying capabilities. For this book, we will be using Git on the
command line. For one, the command line is the only place you can run _all_ Git commands — most
of the GUIs implement only a partial subset of Git functionality for simplicity. If you know how to
run the command-line version, you can probably also figure out how to run the GUI version, while
the opposite is not necessarily true. Also, while your choice of graphical client is a matter of
personal taste, _all_ users will have the command-line tools installed and available.

So we will expect you to know how to open Terminal in macOS or Command Prompt or PowerShell
in Windows. If you don’t know what we’re talking about here, you may need to stop and research
that quickly so that you can follow the rest of the examples and descriptions in this book.

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
  