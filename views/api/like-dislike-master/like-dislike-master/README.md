# like-dislike

A simple JQuery plugin that allow you to create a rating bar with two buttons: Like and Dislike.

- [Demos](http://uagrace.github.io/like-dislike)


## Installation

If you use [Bower](http://bower.io/search/?q=like-dislike), you can type into the command line prompt in your project folder:

`$ bower install like-dislike` 

Or press "Download ZIP" button on the main GitHub page to get all the files and manually add them to your project.


## Preparation

Add the JQuery and like-dislike into your document:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="like-dislike-master/js/like-dislike.min.js"></script>
```


## Usage

```html
<div id="rating">
  <button class="like">Like</button>
  <span class="likes">0</span>
  <button class="dislike">Dislike</button>
  <span class="dislikes">0</span>
</div>

<script type="text/javascript">
  $('#rating').likeDislike({
    reverseMode: true,
    activeBtn: 'like',
    click: function(likes, dislikes, activeBtn, event) {
      var self = this;
      
      // locking the buttons
      self.readOnly(true);
      
      $.ajax({  // sending data to the server
        url: '/url',
        type: 'GET',
        data: 'id=1' + '&likes=' + likes + '&dislikes=' + dislikes,
        success: function (data) {
          // show new values
          $(self).find('.likes').text(data.likes);
          $(self).find('.dislikes').text(data.dislikes);
          
          // unlocking the buttons
          self.readOnly(false);
        }
      });
    }
  });
</script>
```


## Options

```javascript

// this callback function will be called when you click one of the buttons
click: null, // function(likes, dislikes, activeBtn, event) {}

// this callback function executed before 'click'
beforeClick: null, // function(event) {}

// active button ('like', 'dislike' or '')
activeBtn: '', // string

// init plugin with locked or unlocked buttons
readOnly: false, // boolean

// ability to cancel vote
reverseMode: false, // boolean

// class name of the like button
likeBtnClass: 'like', // string

// class name of the dislike button
dislikeBtnClass: 'dislike', // string

// class name of the active button
activeClass: 'active', // string

// class name of the disabled button
disabledClass: 'disabled' // string

```

## Methods

`readOnly(state)` lock or unlock buttons, depending on `state` parameter.
