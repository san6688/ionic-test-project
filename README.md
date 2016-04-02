# ionic-test-project
This is a test mobile application using ionic and ionic material framework. 
It is also to check feasibility of checkingg c9 ide for ionic apps. 
The code is developed in C9 and then pushed on to this repo. 

###### Set up Ionic in C9:

[Ref C9 Doc] (https://docs.c9.io/docs/ionic)


Upgrade to latest 4X version of NPM:
```
	nvm install 4.4.2
	nvm use 4.4.2
```

Install ionic
```
	npm install -g cordova ionic
```

Set up this git code base in C9:
```
	git clone https://github.com/Ssriram83/ionic-test-project.git -b mockup-screens
```

###### Making changes & Pushing changes to repo:


```
	git commit -m "first commit"
	git remote add origin https://github.com/Ssriram83/ionic-test-project.git
	git push -u origin mockup-screens
```
###### Testing:

	[Install the android app] (https://play.google.com/store/apps/details?id=com.ionic.viewapp&hl=en)
	
	[Create an ionic login] (https://apps.ionic.io/login)
	

###### Run the command to see your changes in the ionic webview: 

```
	ionic upload
```

	
