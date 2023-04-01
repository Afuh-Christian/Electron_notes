
# https://www.electronjs.org/docs/

npx create-electron-app@latest my-app

cd my-app

npm start


# ... for distribution....

npm run make

# the zip will be in the out folder....



# NB .... all Html files involve thould contain this ...

  <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    



# Nb ...... Every other thing you could do in a browser can be done here ... electron acts like a browser.... you can navigate to any webpage or local html file you wish to .........





# sample apps ..... and many other courses .. ... https://github.com/sindresorhus/awesome-electron 