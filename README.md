customwrapper
=============

Custom wrapper plugin for tinymce-rails gem 
!!Tested only with https://github.com/spohlenz/tinymce-rails gem, may be works with original tiny mce, i didnt check it!!


How to use it with Ruby on Rails projects
=============
1.Put cloned folder customwrapper to <project_name>\app\assets\javascripts\tinymce\plugins

2.Update your tinymce.yml something like that
  ```theme_advanced_buttons2 : "...,customwrapper"
  plugins:
    - customwrapper  ```

3.If plugin doesnt work in production add something like this
```
config.assets.precompile += [..., 'tinymce/*']
```



