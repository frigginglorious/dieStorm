# dieStorm
A Sandstorm application demo built using MeteorJS for D20 RPG Dice Rolling. This was used in a talk given at [Twin Cities Code Camp](http://twincitiescodecamp.com/#/Talks/31).

This app's purpose is to demonstrate how easy it is to produce a functioning application that has multi-user features and built-in (read: ignored) security with [Sandstorm](https://sandstorm.io/).

### Try it yourself

Install Sandstorm, all you need is a 64 bit linux machine! Go to https://sandstorm.io/install

For installing this app and running on your own Sandstorm Server: upload the [dieStorm.spk](https://drive.google.com/open?id=0B5nUIfDIo1rQdEE3VzZkZGN1bjQ) package file from the main "Apps" page of your Sandstorm server.

### Install for Development

* Download and install Vagrant: https://www.vagrantup.com/downloads.html
* Make sure the vagrant-spk tool is installed: https://docs.sandstorm.io/en/latest/vagrant-spk/installation/
* Run following commands
```
git clone https://github.com/frigginglorious/dieStorm.git
cd dieStorm
vagrant-spk setupvm meteor
vagrant-spk vm up (or vagrant-spk up if that doesn't work)
vagrant-spk init
vagrant-spk dev
```
* go to http://local.sandstorm.io:6080/


### Slides

View slides from the Twin Cities Code Camp presentation: [Six Reasons Sandstorm.io is Rocking the World of Open Source Web Apps](https://zzr0p7gctpmv6s9wtr3y.oasis.sandstorm.io/index.html). For an editable version of slides in Sandstorm, download a copy of the HackerSlides app [here](https://drive.google.com/open?id=0B5nUIfDIo1rQMElkaVBxN0hsM2c).

### Issues?

* Problem: The box 'sandstorm/debian-jessie64' could not be found.
* Solution: Download current version of Vagrant from https://www.vagrantup.com/downloads.html

Please feel free to open an issue or reach out to me on twitter @frigginglorious if you have any problems.