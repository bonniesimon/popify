# popify
*Because I hate electron apps!*<br/>
I hate using electron apps. They always clog up my system, eat up all my RAM and basically make my experience horible.
But its a good thing that all these electron apps have a web based app as well.<br/>
But the problem with these web apps is that they take unnecessary tab space. Therefore when having like >10 tabs, its hard to manage the web app as a tab, especially if its a utility app like spotify.<br/>

So my solution is to pop out the web app into a new minimal browser window. That is excatly what *popify* does

### Installing the Extension

Currently its not released on the add-ons page of mozilla, but will be soon.

#### Manually installing the extension
- Go to the [releases](https://github.com/bonniesimon/popify/releases) section in this repo
- Download the .xpi file.
- Go to *about:addons* in firefox
- Click on the gear icon and choose **Install Addon from file...**
- Then select the .xpi file you've downloaded

#### Temporarily adding the extension (Not Recommended) :

- Get the files
-  - Either Clone the repo or click the big green **Code** button and downlaod as zip (Remember to extract it into a folder)
- Open Firefox, in the url bar type *about:debugging* and click on **This Firefox**
- Click on **Load Temporary Add on**
- Navigate to where you've downloaded the files and click on the *manifest.json* file.
- Now the extension will be loaded in your browser


*I haven't used this in chrome but feel free to explore*