customwrapper
=============
Custom wrapper plugin for tinymce-rails gem
---------------------------------------------

*!!Tested only with https://github.com/spohlenz/tinymce-rails gem, may be works with original tiny mce, i didnt check it!!*


I used this plugin to repsesent selected  text in tinymce as a spoiler.

So i selected text, clicked customwrapper button

Typed spoler header and clicked Update button

That it!

Also, you can modify wrapper template, just  click on Advanced prop. in pop up window



How to use it with Ruby on Rails projects
=============
1.Put cloned folder customwrapper to ```<project_name>\app\assets\javascripts\tinymce\plugins```

2.Update your tinymce.yml something like that
  ```
  theme_advanced_buttons2 : "...,customwrapper"

  plugins:
    - customwrapper

  ```

3.If plugin doesnt work in production add something like this
```
config.assets.precompile += [..., 'tinymce/*']
```

4.You can modify plugin code to use it like pure wrapper(without header), for example wrap selected text with

nested divs
```
<div>

<div>selected_text</div>

</div>
```


IMPORTANT
=====
There is no translation rather then russian, so to get it work with you language you should add translation files

en.js, en_dlg.js ( for english language)



