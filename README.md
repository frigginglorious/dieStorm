# dieStorm
A [Sandstorm](https://sandstorm.io/) application demo built using [Meteor](https://www.meteor.com/) for D20 RPG Dice Rolling. This was used in a talk given at [Twin Cities Code Camp](http://twincitiescodecamp.com/#/Talks/31).

This app's purpose is to demonstrate how easy it is to produce a functioning aplication that has multi-user features and built-in security. The app relies entirely on Sandstorm for that security, and achieves it through zero lines of code.

### Try Live Demo

[![Live Demo on Sandstorm Oasis](https://sandstorm.io/news/images/2016-02-05-app-author-publicity-oasis/try-live%20demo-783189.svg)](https://oasis.sandstorm.io/appdemo/jh06c88d4mrs81frj58psq10aeq6dghad7duuq8nk88j8zqx0zqh)

### Install it Yourself

Install Sandstorm, all you need is a 64 bit linux machine! Go to https://sandstorm.io/install

For installing this app and running on your own Sandstorm Server: upload the [dieStorm.spk](https://github.com/frigginglorious/dieStorm/releases/download/1.0/dieStorm.spk) package file from the main "Apps" page of your Sandstorm server.

### Install for Development

* Download and install Vagrant: https://www.vagrantup.com/downloads.html
* Make sure the vagrant-spk tool is installed: https://docs.sandstorm.io/en/latest/vagrant-spk/installation/
* Run following commands
```
git clone https://github.com/frigginglorious/dieStorm.git
cd dieStorm
vagrant-spk vm up (or vagrant-spk up if that doesn't work)
vagrant-spk dev
```
* go to http://local.sandstorm.io:6080/

### Development Notes

[Meteor](https://www.meteor.com/) is full-stack javascript. All of the logic that makes this app tick is in one of four files, in the /client, /server, and /both folders.

### Slides

View slides from the Twin Cities Code Camp presentation: [Six Reasons Sandstorm.io is Rocking the World of Open Source Web Apps](http://l806a3jti9bjzjgjjop8.frigginglorious.sandcats.io:6080/index.html).

You can fork the slides and get your own, editable version in HackerSlides by taking this [grain backup](https://drive.google.com/open?id=0B5nUIfDIo1rQMElkaVBxN0hsM2c) and doing a 'Restore backup...' on your own account on whatever Sandstorm server you like.

### Issues?

* Problem: The box 'sandstorm/debian-jessie64' could not be found.
* Solution: Download current version of Vagrant from https://www.vagrantup.com/downloads.html

Please feel free to open an issue or reach out to me on twitter [@frigginglorious](http://twitter.com/frigginglorious) if you have any problems.
