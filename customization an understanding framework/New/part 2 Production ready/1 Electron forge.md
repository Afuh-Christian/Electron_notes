# To start a new project ....

npm create electron-app@latest my-app


cd my-app
npm start


# distrigution

npm make


# ############################################################################################################################################3

# we will be importing the existing project we have ........

cd my-app
npm install --save-dev @electron-forge/cli
npx electron-forge import
# ...................



# 1 ... Add Electron Forge as a development dependency of your app, and use its import command to set up Forge's scaffolding:



yarn  add --dev @electron-forge/cli
npx electron-forge import



✔ Checking your system
✔ Initializing Git Repository
✔ Writing modified package.json file
✔ Installing dependencies
✔ Writing modified package.json file
✔ Fixing .gitignore

We have ATTEMPTED to convert your app to be in a format that electron-forge understands.

Thanks for using "electron-forge"!!!





# 2 ...Create a distributable using Forge's make command:


npm run make

> my-electron-app@1.0.0 make /my-electron-app
> electron-forge make



✔ Checking your system
✔ Resolving Forge Config
We need to package your application before we can make it
✔ Preparing to Package Application for arch: x64
✔ Preparing native dependencies
✔ Packaging Application
Making for the following targets: zip
✔ Making for target: zip - On platform: darwin - For arch: x64




