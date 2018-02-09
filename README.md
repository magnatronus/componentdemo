# Component Demo
This project is a test/demo of the built-in Magnium components provided with the Magnium framework. 
These are optional and only added to the project if required.

it uses: 

* androidheader
* androidpdfviewer
* buttonbar
* loadingindicator
* stacknavigator

see config.json for component use.

All components have a standard theme built in, so this project also uses a global theme to override the standard components (see /themes/default.js)

## Running the demo
You need to have the [Magnium CLI module](https://www.npmjs.com/package/magnium) installed first along with an already set up Magnium workspace. Then just clone/copy this project into the projects directory of the workspace (if the projects directory does not exist create it first).

```
{workspacedir}/projects/componentdemo
```

Then build the Magnium project and run t up in a simulator.

```
magnium-build --name componentdemo
```
Run in an iOS simulator

```
ti build -p ios --log-level info -d titanium
```

or for Android

```
ti build -p android --log-level info -d titanium
```
