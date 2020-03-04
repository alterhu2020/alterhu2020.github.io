---
title: Vue toast组件使用及其配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 插件推荐
推荐一个特别好的插件： [vue-toasted](https://github.com/shakee93/vue-toasted)
## 使用方法
#### Install using npm
```bash
# install it via npm
npm install vue-toasted --save
```

#### Install using yarn
```bash
# install it via yarn
yarn add vue-toasted
```

#### Direct usage with html
```html
<!-- Insert the vue core before vue-toasted -->
<script src="https://unpkg.com/vue-toasted"></script>

<script>
    Vue.use(Toasted)
</script>
```
## Usage

It is simple. couple of lines all what you need.

```javascript
// register the plugin on vue
import Toasted from 'vue-toasted';

Vue.use(Toasted)

// you can also pass options, check options reference below
Vue.use(Toasted, Options)

```

```javascript
// you can call like this in your component
this.$toasted.show('hello billo')

// and also
Vue.toasted.show('hola billo');
```

All Good Now you have this cool toast in your project..


### Icons :fire:
[Material Icons](http://google.github.io/material-design-icons/), [Fontawesome](http://fontawesome.io/cheatsheet/) and [Material Design Icons](https://materialdesignicons.com/) are supported. you will have to import the icon packs into your project. <a href="/examples/using-icons.js"> example using icons </a>

```javascript
{
    // pass the icon name as string
    icon : 'check'
    
    // or you can pass an object
    icon : {
        name : 'watch',
        after : true // this will append the icon to the end of content
    }
}
```

### Actions  :fire:
<p align="center">
    <a href="https://github.com/shakee93/vue-toasted" target="_blank">
    <img width="300" src="https://shakee93.github.io/vue-toasted/assets/images/action-preview.jpg">
    </a>
</p> 
<p>You can have single or multiple actions in the toast. take a look at the example below</p>
<p>Check below Vue Router section for router integration</p>

**Parameters**|**Type's**|**Default**|**Description**
-----|-----|-----|-----
text*|String|-| name of action
href|String|`null`| url of action
icon|String|`null`| name of material for action
target|String|`null`| target of url
class|String/Array|`null`| custom css class for the action
push|Object |`null`|  Vue Router push parameters
onClick|Function(e,toastObject) |`null`|  onClick Function of action

##### Examples
```javascript
{
    // you can pass a single action as below
    action : {
        text : 'Cancel',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    },

    // you can pass a multiple actions as an array of actions
    action : [
        {
            text : 'Cancel',
            onClick : (e, toastObject) => {
                toastObject.goAway(0);
            }
        },
        {
            text : 'Undo',
            // router navigation
            push : { 
            	name : 'somewhere',
            	// this will prevent toast from closing
            	dontClose : true
             }
        }
    ]
}
```


## API

### Options

below are the options you can pass to create a toast

**Option**|**Type's**|**Default**|**Description**
-----|-----|-----|-----
position|String|'top-right'|Position of the toast container <br> **['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']**
duration|Number|null|Display time of the toast in millisecond
keepOnHover|Boolean|false|When mouse is over a toast's element, the corresponding `duration` timer is paused until the cursor leaves the element
action|Object, Array|null|Add single or multiple actions to toast  [explained here](#actions--fire)
fullWidth|Boolean|false|Enable Full Width
fitToScreen|Boolean|false|Fits to Screen on Full Width
className|String, Array|null|Custom css class name of the toast
containerClass|String, Array|null|Custom css classes for toast container
iconPack|String|'material'| Icon pack type to be used <br> **['material', 'fontawesome', 'mdi', 'custom-class', 'callback']**
Icon|String, Object|null|Material icon name as string.  [explained here](#icons-fire)
type|String|'default'| Type of the Toast  **['success', 'info', 'error']**
theme|String|'toasted-primary'|Theme of the toast you prefer<br> **['toasted-primary', 'outline', 'bubble']**
onComplete|Function|null|Trigger when toast is completed
closeOnSwipe|Boolean|true|Closes the toast when the user swipes it
singleton|Boolean|false| Only allows one toast at a time.

### Methods

Methods available on Toasted...

```javascript
// you can pass string or html to message
Vue.toasted.show( 'my message', { /* some option */ })
```

**Method**|**Parameter's**|**Description**
-----|-----|-----
show|message, options| show a toast with default style
success|message, options| show a toast with success style
info|message, options| show a toast with info style
error|message, options | show a toast with error style
register | name, message, options | register your own toast with options [explained here](#custom-toast-registration) 
clear | - | clear all toasts

### Toast Object
Each Toast Returns a Toast Object where you can manipulate the toast.

```javascript

// html element of the toast
el : HtmlElement

// change text or html of the toast
text : Function(text)

// fadeAway the toast. default delay will be 800ms
goAway : Function(delay = 800)

```

using the toast object

```javascript
let myToast = this.$toasted.show("Holla !!");
myToast.text("Changing the text !!!").goAway(1500);
```

## 问题

1. 如何配置右侧一个关闭图标？
```js
 action: [
    {
            // 此处用的是fontawesome5图标
            icon: 'times-circle',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
]
```
2. 如何配置一个全局可直接重复调用的toast？
```js
 register: [
        {
          // 使用方法：this.$toast.global.app_error();
          name: 'app_error',
          message: 'Oops...Something went wrong',
          options: {
            type: 'error',
            icon: {
              name: 'exclamation-triangle',
              after: false
            },
            action: [
              {
                icon: 'times-circle',
                onClick: (e, toastObject) => {
                  toastObject.goAway(0)
                }
              }
            ]
          }
        }
      ]
// 然后nuxt中直接如下调用：
this.$toast.global.app_error();
```